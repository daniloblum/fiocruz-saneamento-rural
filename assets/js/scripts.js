// Stick Header

window.addEventListener('scroll', function () {
	const header = document.querySelector('.header');
	const titleHeight = document.querySelector('.header').scrollHeight;

	if (window.scrollY > 150) {
		header.classList.add('header--sticky');
	} else {
		header.classList.remove('header--sticky');
	}
});

// (function () {
// 	// Popover
// 	$(function () {
// 		$('[data-toggle="popover"]').popover(options);
// 	});

// 	// Tooltip
// 	$(function () {
// 		$('[data-toggle="tooltip"]').tooltip(options);
// 	});
// })();

// Popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	return new bootstrap.Popover(popoverTriggerEl);
});

// Botão de copiar podcast

const copyButton = document.querySelectorAll('.copy-to-clip');

copyButton.forEach(btn => {
	btn.addEventListener('click', () => {
		copyToClipboard(btn);
		// tooltipShow(btn);

		tooltipFeedback(btn);
	});
});

function copyToClipboard(e) {
	const textToCopy = e.getAttribute('data-link');
	const textarea = document.createElement('textarea');
	textarea.setAttribute('readonly', '');
	textarea.style.position = 'absolute';
	textarea.value = textToCopy;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	document.body.removeChild(textarea);
}
function tooltipFeedback(b) {
	let feedback = $('[data-toggle="tooltip"]');

	// feedback.tooltip('show');

	b.addEventListener('mouseout', () => {
		feedback.tooltip('hide');
	});
}

// Lightbox (insert the class "lightbox" into <figure>)

const imageToLightbox = document.querySelectorAll('.lightbox');

imageToLightbox.forEach(image => {
	image.addEventListener('click', () => {
		if (!image.classList.contains('lightbox--show')) {
			const getImage = image.querySelector('img');
			const getImageSrc = getImage.getAttribute('src');
			const imageLightbox = document.createElement('div');

			imageLightbox.classList.add('lightbox__image');

			document.body.appendChild(imageLightbox);
			imageLightbox.innerHTML = `<img src="${getImageSrc}"/>`;
			console.log(getImageSrc);

			image.classList.add('lightbox--show');

			document.body.style.overflow = 'hidden';
			document.body.style.userSelect = 'none';

			closeLightbox(imageLightbox);
		}

		function closeLightbox(e) {
			const lightboxOpen = document.querySelector('.lightbox__image');
			e.addEventListener('click', () => {
				document.body.removeChild(e);
				image.classList.remove('lightbox--show');
				document.body.style.overflow = 'auto';
				document.body.style.userSelect = 'auto';
			});
		}
	});
});

// Boxes - inserir o título de acordo com o atributo

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
	const boxAttribute = box.getAttribute('data-box');

	const boxLabel = box.querySelector('.label');

	boxLabel.innerHTML = boxAttribute;
});

// Modal - Criação dos modais principais

const modalInfos = {
	creditos: {
		ariaLabel: 'creditos',
		modalSize: 'modal-lg',
		modalTitle: 'Créditos',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<span class="h5 mb-3 d-block">Ministério da Saúde</span>

					<div class="mb-5">
						<p class="mb-1">Alexandre Padilha</p>
						<p class="small text-muted"><em>Ministro</em></p>
					</div>

					<span class="h5 mb-3 d-block">Fundação Oswaldo Cruz – Fiocruz</span>
					
					<div class="mb-5">
						<p class="mb-1">Mario Moreira</p>
						<p class="small text-muted"><em>Presidente</em></p>
						<p class="mb-1">Cristiani Vieira Machado</p>
						<p class="small text-muted"><em>Vice-Presidência de Educação, Informação e Comunicação (VPEIC)</em></p>
					</div>

					<span class="h5 mb-3 d-block">Campus Virtual Fiocruz</span>

					<div class="mb-5">

						<p class="mb-1">Ana Cristina da Matta Furniel</p>
						<p class="small text-muted"><em>Coordenadora geral</em></p>

						<p class="mb-1">Rosane Mendes</p>
						<p class="small text-muted"><em>Coordenadora adjunta</em></p>
						
						<p class="mb-1">Renata Bernardes David</p>
						<p class="small text-muted"><em>Coordenadora de Produção</em></p>

						<p class="mb-1">Juliana Dutra</p>
						<p class="small text-muted"><em>Revisora técnica de conteúdo</em></p>

						<p class="mb-1">Cláudia Reis</p>
						<p class="small text-muted"><em>Assessora pedagógica</em></p>

						<p class="mb-1">Isabela Schincariol</p>
						<p class="small text-muted"><em>Assessora de comunicação</em></p>
					
						<p class="mb-1">Fernanda Sousa</p>
						<p class="small text-muted"><em>Designer Educacional</em></p>
					
						<span class="h6 mb-3 d-block">Design de Interface</span>
						
						<p class="mb-1">Aline Polycarpo</p>
						<p class="small text-muted"><em>UX/UI Designer</em></p>
						<p class="mb-1">Danilo Blum</p>
						<p class="small text-muted"><em>UX/UI Designer e Front-end</em></p>
						<p class="mb-1">Luciana Nunes</p>
						<p class="small text-muted"><em>UX/UI Designer</em></p>
						
						<span class="h6 mb-3 d-block">Recursos Audiovisuais</span>

						<p class="mb-1">Bruno Athaydes</p>
						<p class="small text-muted"><em>Editor audiovisual</em></p>

						<p class="mb-1">Teo Venerando</p>
						<p class="small text-muted"><em>Editor audiovisual</em></p>
			
						<span class="h6 mb-3 d-block">Recursos Educacionais</span>
						
						<p class="mb-1">Carmélia Brito</p>
						<p class="small text-muted"><em>Bibliotecária</em></p>

						<p class="mb-1">Natália Rasina</p>
						<p class="small text-muted"><em>Audiodescrição</em></p>

						<p class="mb-1">Janaina Vieira</p>
						<p class="small text-muted"><em>Revisão de português</em></p>

						<p class="mb-1">Maria Angélica Marcondes Drska</p>
						<p class="small text-muted"><em>Revisão de português</em></p>


						<span class="h6 mb-3 d-block">Suporte Técnico de Tecnologia da Informação</span>
					
						<p class="mb-1">Bruno Alexandre de Oliveira</p>
						<p class="small text-muted"><em>Desenvolvedor</em></p>

						<p class="mb-1">Eduardo Xavier da Silva</p>
						<p class="small text-muted"><em>Desenvolvedor</em></p>

						<p class="mb-1">Adriano Lourenço</p>
						<p class="small text-muted"><em>Analista de suporte</em></p>

						<p class="mb-1">Orlando Terra</p>
						<p class="small text-muted"><em>Analista de suporte</em></p>

						<p class="mb-1">Fábio Carneiro</p>
						<p class="small text-muted"><em>Designer gráfico e web designer</em></p>
					</div>

					<span class="h5 mb-3 d-block">Coordenação do Projeto</span>
					
					<div class="mb-5">
						<p class="mb-1">Alexandre Pessoa Dias</p>
						<p class="small text-muted"><em>Escola Politécnica de Saúde Joaquim Venâncio da Fiocruz (ESPJV/Fiocruz)</em></p>

						<span class="h6 mb-3 d-block">Conteudistas</span>
						
						<p class="mb-1"><strong>Módulo 1:</strong></p>

						<p class="mb-1">Alexandre Pessoa Dias</p>
						<p class="small text-muted"><em>ESPJV/Fiocruz</em></p>

						<p class="mb-1">Uende Aparecida Figueiredo Gomes</p>
						<p class="small text-muted"><em>DESA/UFMG</em></p>

						<p class="mb-1">Mariely Daniel</p>
						<p class="small text-muted"><em>Fiocruz</em></p>

						<p class="mb-1"><strong>Módulo 2:</strong></p>

						<p class="mb-1">Bernardo Aleixo</p>
						<p class="small text-muted"><em>Fiocruz Minas</em></p>

						<p class="mb-1">Uende Aparecida Figueiredo Gomes</p>
						<p class="small text-muted"><em>DESA/UFMG</em></p>


						<p class="mb-1"><strong>Módulo 3:</strong></p>

						<p class="mb-1">Alexandre Pessoa Dias</p>
						<p class="small text-muted"><em>ESPJV/Fiocruz</em></p>

						<p class="mb-1">Bernardo Aleixo</p>
						<p class="small text-muted"><em>Fiocruz Minas</em></p>

						<p class="mb-1">Uende Aparecida Figueiredo Gomes</p>
						<p class="small text-muted"><em>DESA/UFMG</em></p>
					</div>
					
				</div>
			</div>
		`,
	},
	bibliografiaMod1: {
		ariaLabel: 'bibliografiaMod1',
		modalSize: 'modal-xl',
		modalTitle: 'Bibliografia Módulo 1',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<div class="mb-5">
						<p><strong>AGÊNCIA GOV</strong>. <em>No Brasil, 9,6 milhões saíram da condição de extrema pobreza em 2023</em>. Disponível em: <a href='https://agenciagov.ebc.com.br/noticias/202407/no-brasil-9-6-milhoes-sairam-da-condicao-de-extrema-pobreza-em-2023-1#:~:text=Para%20a%20pesquisa%20do%20FGV,R$209%20mensais%20per%20capita' target='_blank'>https://agenciagov.ebc.com.br/noticias/202407/no-brasil-9-6-milhoes-sairam-da-condicao-de-extrema-pobreza-em-2023-1#:~:text=Para%20a%20pesquisa%20do%20FGV,R$209%20mensais%20per%20capita</a>. Acesso em: 19 ago. 2024.</p>

						<p><strong>ALBUQUERQUE, C.</strong> <em>Realising the human rights to water and sanitation: a handbook by the UN Special Rapporteur</em>. Booklet 1. Lisboa, Portugal: 2014.</p>

						<p><strong>BORJA, P. C.</strong> Avaliação de políticas públicas de Saneamento Básico: uma reflexão teórico-conceitual e metodológica a partir do Programa Bahia Azul. In: <strong>BRASIL</strong>. Ministério das Cidades. <em>Coletânea sobre saneamento básico e a Lei no 11.445/2007</em>. Brasília, DF, 2009. Livro III, p. 462. Disponível em: https://web.bndes.gov.br/bib/jspui/bitstream/1408/2161/1/Lei%20nacional%20de%20saneamento%20basico_Livro%20III_P_BD.pdf. Acesso em: 17 ago. 2024.</p>

						<p><strong>BRASIL.</strong> Fundação Nacional de Saúde. <em>Fundação Nacional de Saúde</em>. 1. ed. Brasília: Funasa, 2021. (Série Memórias do Programa Nacional de Saneamento Rural).</p>

						<p><strong>BRASIL.</strong> <em>Lei no 11.445, de 5 de janeiro de 2007</em>. Estabelece diretrizes nacionais para o saneamento básico. Brasília, 2007. Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2007/lei/l11445.htm' target='_blank'>https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2007/lei/l11445.htm</a>.</p>

						<p><strong>BRASIL.</strong> Fundação Nacional de Saúde. <em>Programa Nacional de Saneamento Rural PNSR: aspectos conceituais da ruralidade no Brasil e interfaces com o saneamento básico</em> / Fundação Nacional de Saúde. 1. ed. Brasília: Funasa, 2021. 127 p. (Série Subsídios ao Programa Nacional de Saneamento Rural; v. 1).</p>

						<p><strong>BRASIL.</strong> Fundação Nacional de Saúde. <em>Projeto Proágua Rural: Educação e participação social</em>. Fundação Nacional de Saúde, Universidade Federal do Vale do São Francisco – Brasília: Funasa, 2024. 73 p. Disponível em: <a href='https://repositorio.funasa.gov.br/handle/123456789/740' target='_blank'>https://repositorio.funasa.gov.br/handle/123456789/740</a>. Acesso em: ago. 2025.</p>

						<p><strong>CALDART, R. S.; PEREIRA, I. B.; ALTEJANO, P.; FRIGOTTO, G.</strong> (org.). <em>Dicionário da Educação do Campo</em>. São Paulo: Expressão Popular; EPSJV/Fiocruz, 2013.</p>

						<p><strong>DELGADO, N. G.; LEITE, S. P.; SCHMITT, C. J.; GRISA, C.; KATO, K.; WESZ JUNIOR, V. J.</strong> Tipologias de ruralidades em agências multilaterais e organismos internacionais selecionados. Páginas 77 a 144. In: <strong>MIRANDA, C. e SILVA, H.</strong> (Org.). <em>Concepções da ruralidade contemporânea: as singularidades brasileiras.</em> Brasília: IICA, 2013. (Série Desenvolvimento Rural Sustentável; v. 21).</p>

						<p><strong>DIAS, A. P.</strong> <em>Pedagogia das águas em movimento: experiência de educação popular em saúde ambiental: território, caminhos das águas e da saúde ambiental</em>. Rio de Janeiro: EPSJV, 2021. 21 p. (Pedagogia das águas em movimento, 1). Disponível em: <a href='https://www.epsjv.fiocruz.br/sites/default/files/f1.pdf' target='_blank'>https://www.epsjv.fiocruz.br/sites/default/files/f1.pdf</a>. Acesso em: 25 ago. 2024.</p>

						<p><strong>DIAS, A. P.; STAUFFER, A. B.; MOURA, L. H. G.; VARGAS, M.</strong> <em>Dicionário de Educação e Agroecologia</em>. São Paulo: Expressão Popular; Rio de Janeiro: EPSJV, 2021. Disponível em: <a href='https://www.epsjv.fiocruz.br/publicacao/livro/dicionario-de-agroecologia-e-educacao' target='_blank'>https://www.epsjv.fiocruz.br/publicacao/livro/dicionario-de-agroecologia-e-educacao.</a></p>

						<p><strong>FUNDAÇÃO NACIONAL DE SAÚDE</strong>. <em>Programa Nacional de Saneamento Rural</em>. 2019. Disponível em: <a href='http://www.funasa.gov.br/biblioteca-eletronica/publicacoes/engenharia-de-saude-publica/-/asset_publisher/ZM23z1KP6s6q/content/programa-nacional-de-saneamento-rural-pnsr-?inheritRedirect=false' target='_blank'>http://www.funasa.gov.br/biblioteca-eletronica/publicacoes/engenharia-de-saude-publica/-/asset_publisher/ZM23z1KP6s6q/content/programa-nacional-de-saneamento-rural-pnsr-?inheritRedirect=false</a>. Acesso em: 11 mar. 2025.</p>

						<p><strong>GOMES, U. A. F.; PENA, J. L.; AMARAL, R.</strong> (org.). <em>Caderno de Notas Técnicas</em> [livro eletrônico]: saneamento e suas interfaces. 1. ed. Belo Horizonte: 207 p., Projeto SanBas, 2022. v. 1. Disponível em: <a href='https://sanbas.eng.ufmg.br/leituras/' target='_blank'>https://sanbas.eng.ufmg.br/leituras/</a>.</p>

						<p><strong>GOMES, U. A. F.; PENA, J. L.; QUEIROZ, J. T. M.</strong> (org.). <em>Dicionário de saneamento básico</em> [livro eletrônico]: pilares para uma gestão participativa nos municípios. 1. ed. Belo Horizonte: 793, Projeto SanBas, 2022. v. 1. Disponível em: <a href='https://sanbas.eng.ufmg.br/leituras/' target='_blank'>https://sanbas.eng.ufmg.br/leituras/</a>.</p>

						<p><strong>INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA – IBGE.</strong> <em>Classificação e caracterização dos espaços rurais e urbanos do Brasil: uma primeira aproximação.</em> 2017. Disponível em: <a href='https://www.ibge.gov.br/geociencias/organizacao-do-territorio/tipologias-do-territorio/15790-classificacao-rural-e-urbana.html?=&t=publicacoes' target='_blank'>https://www.ibge.gov.br/geociencias/organizacao-do-territorio/tipologias-do-territorio/15790-classificacao-rural-e-urbana.html?=&t=publicacoes</a>.</p>

						<p><strong>INSTITUTO BRASILEIRO DE GEOGRAFIA E ESTATÍSTICA – IBGE.</strong> <em>Proposta metodológica para classificação dos espaços do rural, do urbano e da natureza no Brasil</em>. 2023. Disponível em: <a href='https://www.ibge.gov.br/geociencias/organizacao-do-territorio/tipologias-do-territorio/15790-classificacao-rural-e-urbana.html?=&t=publicacoes' target='_blank'>https://www.ibge.gov.br/geociencias/organizacao-do-territorio/tipologias-do-territorio/15790-classificacao-rural-e-urbana.html?=&t=publicacoes</a>.</p>

						<p><strong>INSTITUTO DE PESQUISA ECONÔMICA APLICADA.</strong> <em>Plano Nacional de Desenvolvimento Sustentável Rural e Solidário PNDRSS</em>. Instituto de Pesquisa Econômica Aplicada. Brasília: Rio de Janeiro: Ipea, sem ano. Disponível em: <a href='https://www.ipea.gov.br/participacao/images/pdfs/conferencias/2CNDRSS/plano_nacional_desenvolvimento_rural_sustentavel.pdf' target='_blank'>plano_nacional_desenvolvimento_rural_sustentavel.pdf (ipea.gov.br)</a>. Acesso em: 19 jun. 2024.</p>

						<p><strong>KAGEYAMA, A.; HOFFMANN, R.</strong> Pobreza no Brasil: uma perspectiva multidimensional. <em>Economia e Sociedade</em>, v. 15, n. 1, p. 79-112, 2006.</p>

						<p><strong>ONU.</strong> <em>The Sustainable Development Goals Report 2024</em>. Disponível em: h<a href='ttps://unstats.un.org/sdgs/report/2024/The-Sustainable-Development-Goals-Report-2024.pdf' target='_blank'>ttps://unstats.un.org/sdgs/report/2024/The-Sustainable-Development-Goals-Report-2024.pdf</a>. Acesso em: 22 ago. 2024.</p>

						<p><strong>ORGANIZAÇÃO MUNDIAL DE SAÚDE (OMS).</strong> <em>Constitution of the World Health Organization 1946</em>. Geneva: World Health Organization, 1948. Disponível em: <a href='https://apps.who.int/gb/bd/PDF/bd47/EN/constitution-en.pdf?ua=1' target='_blank'>https://apps.who.int/gb/bd/PDF/bd47/EN/constitution-en.pdf?ua=1</a>. Acesso em: 22 ago. 2024.</p>

						<p><strong>PNUD.</strong> <em>PROGRAMA DAS NAÇÕES UNIDAS PARA O DESENVOLVIMENTO. Relatório do Desenvolvimento Humano 2006</em>. 1101 p. Disponível em: <a href='https://hdr.undp.org/system/files/documents/2006-hdr-portuguese-summary.2006-hdr-portuguese-summary' target='_blank'>https://hdr.undp.org/system/files/documents/2006-hdr-portuguese-summary.2006-hdr-portuguese-summary</a>.</p>

						<p><strong>VALADARES, A. A.</strong> <em>O gigante invisível: território e população rural para além das convenções oficiais.</em> Instituto de Pesquisa Econômica Aplicada – IPEA, 2014.</p>

						<p><strong>VEIGA, José Eli.</strong> Nem tudo é urbano. <em>Ciência e Cultura</em>, v. 56, n. 2, São Paulo, abr./jun. 2004. Disponível em: <a href='https//cienciaecultura.bvs.br/pdf/cic/v56n2/a16v56n2.pdf' target='_blank'>https//cienciaecultura.bvs.br/pdf/cic/v56n2/a16v56n2.pdf</a>. Acesso em: 17 jul. 2017.</p>

						<p><strong>WANDERLEY, M. N. B.; FAVARETO, A.</strong> A Singularidade do rural Brasileiro: implicação para as tipologias territoriais e a elaboração de políticas. In:<strong> MIRANDA, C. e SILVA, H.</strong> (Org.) <em>Concepções da ruralidade contemporânea: as singularidades brasileiras</em>. Brasília: IICA, 2013. (Série Desenvolvimento Rural Sustentável; v. 21).</p>
					</div>
					
				</div>
			</div>
		`,
	},
	bibliografiaMod2: {
		ariaLabel: 'bibliografiaMod2',
		modalSize: 'modal-xl',
		modalTitle: 'Bibliografia Módulo 2',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<div class="mb-5">
						<p>BRASIL. <strong>Fundação Nacional de Saúde.</strong> <em>Programa Nacional de Saneamento Rural.</em> 2019. Disponível em: <a href='http://www.funasa.gov.br/biblioteca-eletronica/publicacoes/engenharia-de-saude-publica/-/asset_publisher/ZM23z1KP6s6q/content/programa-nacional-de-saneamento-rural-pnsr-?inheritRedirect=false' target='_blank'>http://www.funasa.gov.br/biblioteca-eletronica/publicacoes/engenharia-de-saude-publica/-/asset_publisher/ZM23z1KP6s6q/content/programa-nacional-de-saneamento-rural-pnsr-?inheritRedirect=false</a>. Acesso em: 11 mar. 2025.</p>

						<p>BRASIL. <strong>Fundação Nacional de Saúde.</strong> <em>Programa Nacional de Saneamento Rural PNSR: aspectos conceituais da ruralidade no Brasil e interfaces com o saneamento básico</em> / Fundação Nacional de Saúde. 1. ed. Brasília: Funasa, 2021. 127 p. (Série Subsídios ao Programa Nacional de Saneamento Rural; v. 1).</p>

						<p>BRASIL. <strong>Lei nº 11.445</strong>, de 5 de janeiro de 2007. Estabelece as diretrizes nacionais para o saneamento básico; cria o Comitê Interministerial de Saneamento Básico; altera as Leis nos 6.766, de 19 de dezembro de 1979, 8.666, de 21 de junho de 1993, e 8.987, de 13 de fevereiro de 1995; e revoga a Lei nº 6.528, de 11 de maio de 1978. Brasília, DF: Diário Oficial da União, 2007.</p>

						<p>BRASIL. <strong>Lei nº 14.026</strong>, de 15 de julho de 2020. Atualiza o marco legal do saneamento básico e altera a Lei nº 9.984, de 17 de julho de 2000, para atribuir à Agência Nacional de Águas e Saneamento Básico (ANA) competência para editar normas de referência sobre o serviço de saneamento, a Lei nº 10.768, de 19 de novembro de 2003, para alterar o nome e as atribuições do cargo de Especialista em Recursos Hídricos, a Lei nº 11.107, de 6 de abril de 2005, para vedar a prestação por contrato de programa dos serviços públicos de que trata o art. 175 da Constituição Federal, a Lei nº 11.445, de 5 de janeiro de 2007, para aprimorar as condições estruturais do saneamento básico no País, a Lei nº 12.305, de 2 de agosto de 2010, para tratar dos prazos para a disposição final ambientalmente adequada dos rejeitos, a Lei nº 13.089, de 12 de janeiro de 2015 (Estatuto da Metrópole), para estender seu âmbito de aplicação às microrregiões, e a Lei nº 13.529, de 4 de dezembro de 2017, para autorizar a União a participar de fundo com a finalidade exclusiva de financiar serviços técnicos especializados. Brasília, DF: Diário Oficial da União, 2020.</p>

						<p>BRASIL. <strong>Ministério das Cidades</strong>. <em>Plano Nacional de Saneamento Básico - PLANSAB: mais saúde com qualidade de vida e cidadania</em>. Brasília: Ministério das Cidades, 220 p., 2014. Disponível em: <a href='https://antigo.mdr.gov.br/images/stories/ArquivosSNSA/PlanSaB/plansab_texto_editado_para_download.pdf' target='_blank'>https://antigo.mdr.gov.br/images/stories/ArquivosSNSA/PlanSaB/plansab_texto_editado_para_download.pdf</a>. Acesso em: 11 mar. 2025.</p>

						<p>BRASIL. <strong>Ministério do Desenvolvimento Regional</strong>. <em>Plano Nacional de Saneamento Básico - PLANSAB: mais saúde com qualidade de vida e cidadania</em>. Brasília: Ministério do Desenvolvimento Regional, 240 p., 2019.</p>

						<p>GOMES, U. A. F. <em>Política federal para o saneamento básico</em>. In: GOMES, U. A. F.; PENA, J. L.; QUEIROZ, J. T. M. (Org.). <em>Dicionário de saneamento básico</em> [livro eletrônico]: pilares para uma gestão participativa nos municípios. 1. ed. Belo Horizonte: Projeto SanBas, 2022. v. 1. Disponível em: <a href='https://sanbas.eng.ufmg.br/leituras/' target='_blank'>https://sanbas.eng.ufmg.br/leituras/</a>. Acesso em: 08 set. 2024.</p>

						<p>GOMES, U. A. F.; PENA, J. L.; QUEIROZ, J. T. M. (Org.). <em>Dicionário de saneamento básico: pilares para uma gestão participativa nos municípios</em> [livro eletrônico]. Belo Horizonte, MG: Projeto SanBas, 2022. 793 p. Disponível em: <a href='https://sanbas.eng.ufmg.br/wp-content/uploads/2022/07/Dicionario-de-Saneamento-Basico.pdf' target='_blank'>https://sanbas.eng.ufmg.br/wp-content/uploads/2022/07/Dicionario-de-Saneamento-Basico.pdf</a>. Acesso em: 08 set. 2024.</p>

						<p>GONDIM, G. M. M. (Org.). <em>Técnico de vigilância em saúde: fundamentos: volume 2</em> / Organização de Grácia Maria de Miranda Gondim, Maria Auxiliadora Córdova Christófaro e Gladys Miyashiro Miyashiro. Rio de Janeiro: EPSJV, 2017. 272 p.</p>

						<p>HELLER, L.; CASTRO, J. E. <em>Política pública de saneamento: apontamentos teórico-conceituais</em>. Engenharia sanitária e ambiental, v. 12, p. 284-295, 2007</p>
					</div>
				</div>
			</div>
		`,
	},
	bibliografiaMod3: {
		ariaLabel: 'bibliografiaMod3',
		modalSize: 'modal-xl',
		modalTitle: 'Bibliografia Módulo 3',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<div class="mb-5">
						<p><strong>ARTICULAÇÃO NO SEMIÁRIDO BRASILEIRO (ASA)</strong>. Articulação no Semiárido Brasileiro (ASA) – site da Articulação no Semiárido Brasileiro. Disponível em: <a href='https://www.asabrasil.org.br/' target='_blank'>https://www.asabrasil.org.br/</a>. Acesso em: 27 nov. 2024.</p>

						<p><strong>BRASIL.</strong> Fundação Nacional de Saúde. <em>Projeto Proágua Rural: Educação e participação social</em>. Universidade Federal do Vale do São Francisco. (Caderno didático técnico). Brasília: Funasa, 2024. 73 p.</p>

						<p><strong>BRASIL.</strong> Lei Nº 11.445, de 5 de janeiro de 2007. Estabelece as diretrizes nacionais para o saneamento básico; cria o Comitê Interministerial de Saneamento Básico; altera as Leis nos 6.766, de 19 de dezembro de 1979, 8.666, de 21 de junho de 1993, e 8.987, de 13 de fevereiro de 1995; e revoga a Lei nº 6.528, de 11 de maio de 1978. Brasília, DF: Diário Oficial da União, 2007.</p>

						<p><strong>BRASIL.</strong> Lei Nº 14.026, de 15 de julho de 2020. Atualiza o marco legal do saneamento básico e altera a Lei nº 9.984, de 17 de julho de 2000, para atribuir à Agência Nacional de Águas e Saneamento Básico (ANA) competência para editar normas de referência sobre o serviço de saneamento. Brasília, DF: Diário Oficial da União, 2020.</p>

						<p><strong>BRASIL.</strong> Ministério das Cidades. <em>Plano Nacional de Saneamento Básico (Plansab)</em>. Brasília: MCidades, 2019. Disponível em: <a href='https://www.gov.br/mdr/pt-br/assuntos/saneamento/Plansab/Versao_Conselhos_Resoluo_Alta__Capa_Atualizada.pdf' target='_blank'>https://www.gov.br/mdr/pt-br/assuntos/saneamento/Plansab/Versao_Conselhos_Resoluo_Alta__Capa_Atualizada.pdf</a>. Acesso em: 02 out. 2023.</p>

						<p><strong>BRASIL.</strong> Ministério do Desenvolvimento Regional. <em>Plano Nacional de Saneamento Básico - PLANSAB: mais saúde com qualidade de vida e cidadania</em>. Brasília: Ministério do Desenvolvimento Regional, 240 p, 2019b.</p>

						<p><strong>BRASIL.</strong> Ministério da Saúde. <em>Manual de orientação para cadastramento das diversas formas de abastecimento de água</em>. Brasília: Ministério da Saúde, 2006.</p>

						<p><strong>BRASIL.</strong> Ministério da Saúde. Fundação Nacional de Saúde. <em>Manual de saneamento</em>. 4. ed. Brasília: Fundação Nacional de Saúde, 2015.</p>

						<p><strong>BRASIL.</strong> Ministério da Saúde. <em>Plano de segurança da água: garantindo a qualidade e promovendo a saúde: um olhar do SUS</em>. Brasília: Ministério da Saúde, 2012.</p>

						<p><strong>BRASIL.</strong> Ministério da Saúde. Portaria GM/MS nº 888, de 4 de maio de 2021. Altera o Anexo XX da Portaria de Consolidação GM/MS nº 5, de 28 de setembro de 2017, para dispor sobre os procedimentos de controle e de vigilância da qualidade da água para consumo humano e seu padrão de potabilidade.</p>

						<p><strong>BRASIL.</strong> Ministério da Saúde. Fundação Nacional de Saúde. <em>Saneamento domiciliar: Manual de instruções de uso das melhorias domiciliares</em>. Brasília: Funasa, 2014. Disponível em: <a href='https://www.funasa.gov.br/site/wp-content/files_mf/manualdeorientacoestecnicasparaelaboracaodepropostasmelhoriassanitariasdomiciliares.pdf' target='_blank'>https://www.funasa.gov.br/site/wp-content/files_mf/manualdeorientacoestecnicasparaelaboracaodepropostasmelhoriassanitariasdomiciliares.pdf</a>. Acesso em: 27 nov. 2024.</p>

						<p><strong>BRASIL.</strong> Ministério da Saúde. Fundação Nacional de Saúde. <em>Programa Nacional de Saneamento Rural</em>. Brasília: Funasa, 2019. Disponível em: <a href='funasa.gov.br/documents/20182/38564/MNL_PNSR_2019.pdf' target='_blank'>funasa.gov.br/documents/20182/38564/MNL_PNSR_2019.pdf</a>. Acesso em: 27 nov. 2024.</p>

						<p><strong>BRASIL.</strong> Ministério da Saúde. Fundação Nacional de Saúde. <strong>Termo de referência para elaboração de Plano Municipal de Saneamento Básico</strong>. Brasília: Funasa, 2018. Disponível em: <a href='http://www.funasa.gov.br/termo-de-referencia-tr-para-pmsb' target='_blank'>http://www.funasa.gov.br/termo-de-referencia-tr-para-pmsb</a>. Acesso em: 02 nov. 2023.</p>

						<p><strong>BRASIL. FUNASA.</strong> Fundação Nacional de Saúde. <em>Manual da solução alternativa coletiva simplificada de tratamento de água para consumo humano em pequenas comunidades utilizando filtro e dosador desenvolvidos pela Funasa/ Superintendência Estadual do Pará</em>. Brasília: Funasa, 2017a. 49 p.</p>

						<p><strong>BRASIL. FUNASA.</strong> Fundação Nacional de Saúde. <em>Manual de Orientações Técnicas para Elaboração e Apresentação de Propostas e Projetos para Sistemas de Esgotamento Sanitário – Funasa </em>(Portaria Funasa nº 526, de 6 de abril de 2017). Brasília: Funasa, 2017b.</p>

						<p><strong>BRASIL. FUNASA.</strong> Fundação Nacional de Saúde. <em>Programa Nacional de Saneamento Rural – PNSR</em>. Brasília: Funasa, 2019a. 260 p.</p>

						<p><strong>BRASIL. FUNASA</strong>. Fundação Nacional de Saúde. <em>Programa Nacional de Saneamento Rural</em>. 2019. Disponível em: <a href='http://www.funasa.gov.br/biblioteca-eletronica/publicacoes/engenharia-de-saude-publica/-/asset_publisher/ZM23z1KP6s6q/content/programa-nacional-de-saneamento-rural-pnsr-?inheritRedirect=false' target='_blank'>http://www.funasa.gov.br/biblioteca-eletronica/publicacoes/engenharia-de-saude-publica/-/asset_publisher/ZM23z1KP6s6q/content/programa-nacional-de-saneamento-rural-pnsr-?inheritRedirect=false</a>.</p>

						<p><strong>BRASIL. FUNASA.</strong> Fundação Nacional de Saúde. <em>Programa Nacional de Saneamento Rural PNSR: aspectos conceituais da ruralidade no Brasil e interfaces com o saneamento básico</em>. 1. ed. Brasília: Funasa, 2021f. 127 p. (Série Subsídios ao Programa Nacional de Saneamento Rural; v. 1).</p>

						<p><strong>BRASIL. FUNASA.</strong> Fundação Nacional de Saúde. <em>Manual de Saneamento</em>. 5. ed. Brasília, 2019b.</p>

						<p><strong>BRASIL, República Federativa do.</strong> <em>Constituição Federal</em>, de 05 de outubro de 1988. Brasília, DF: Senado Federal, 1988. Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/Constituicao/Constituicao.htm' target='_blank'>https://www.planalto.gov.br/ccivil_03/Constituicao/Constituicao.htm</a>. Acesso em: 01 nov. 2023.</p>

						<p><strong>BORJA, P. C.; ROCHA, H.</strong> Participação social para a elaboração de plano municipal de saneamento básico: Peça técnica n° 3. In: <strong>BORJA, P. C</strong>. Peças técnicas relativas a planos municipais de saneamento básico. Brasília: Ministério das Cidades, 2011.</p>

						<p><strong>BOTUMIRIM.</strong> <em>Plano Municipal de Saneamento Básico</em>. No link <a href='https://sanbas.eng.ufmg.br/botumirim-mg/#produto_e' target='_blank'>https://sanbas.eng.ufmg.br/botumirim-mg/#produto_e</a> você pode conferir todo o conteúdo e conhecer todos os programas, projetos e ações que foram sugeridos para o município de Botumirim no seu PMSB.</p>

						<p><strong>BÚRIGO, A. C.; CASTRO, G.; BRAGA, L. Q. V.; BARCELOS, E. A. S.</strong> (Org.) <em>Curso Técnico em Meio Ambiente: Tramas e tessituras. Metodologias</em>. v. 3, 2017. Disponível em: <a href='http://www.epsjv.fiocruz.br/publicacao/livro/fasciculo-3-metodologias' target='_blank'>http://www.epsjv.fiocruz.br/publicacao/livro/fasciculo-3-metodologias</a>. Acesso em: 13 ago. 2023.</p>

						<p><strong>CONAMA.</strong> Conselho Nacional do Meio Ambiente. Resolução nº 357, de 17 de março de 2005. Dispõe sobre a classificação dos corpos de água e diretrizes ambientais para o seu enquadramento, bem como estabelece as condições e padrões de lançamento de efluentes, e dá outras providências. Brasília, 2005.</p>

						<p><strong>COSTA, A. M.; DIAS, A. P.; OLIVEIRA, R.</strong> Fontes. Doenças relacionadas ao saneamento ambiental inadequado (DRSAIs). In. <em>Dicionário de saneamento básico: pilares para uma gestão participativa nos municípios</em>. Belo Horizonte, MG: Projeto SanBas, 2022, p. 218-224. Disponível em: <a href='https://sanbas.eng.ufmg.br/wp-content/uploads/2022/07/Dicionario-de-Saneamento-Basico.pdf' target='_blank'>https://sanbas.eng.ufmg.br/wp-content/uploads/2022/07/Dicionario-de-Saneamento-Basico.pdf</a>. Acesso em: 14 out. 2023.</p>

						<p><strong>DIAS, A. P.</strong> <em>Tecnologias sociais em saneamento e educação para o enfrentamento da transmissão de parasitoses intestinais no Assentamento 25 de Maio, Ceará</em>. Tese de Doutorado pelo Programa de Pós-Graduação em Medicina Tropical do Instituto Oswaldo Cruz, Fiocruz. 327f. 2017.</p>

						<p><strong>DIAS, A. P.; CAETANO, A. P. L.; MAGGI, L.; COSTA, M. A.; BORGES, S.; DINIZ, T. C.</strong> <em>Pedagogia das águas em movimento: experiência de educação popular em saúde ambiental</em>. Rio de Janeiro: EPSJV, 2021. Disponível em: <a href='https://www.epsjv.fiocruz.br/pedagogia-das-aguas-em-movimento' target='_blank'>https://www.epsjv.fiocruz.br/pedagogia-das-aguas-em-movimento</a>. Acesso em: 13 ago. 2023.</p>

						<p><strong>DIAS, A. P.; CARNEIRO, F. F.</strong> Saúde das Populações do Campo, da Floresta e das Águas. In. <em>Dicionário de agroecologia e educação</em>. 1. ed. São Paulo: Expressão Popular. Rio de Janeiro: EPSJV, 2021, p. 676-682.</p>

						<p><strong>DIAS, A. P. et al.</strong> <em>Dicionário de agroecologia e educação</em>. São Paulo: Expressão Popular; Rio de Janeiro: Politécnica de Saúde Joaquim Venâncio, 2021. Disponível em: <a href='https://www.epsjv.fiocruz.br/sites/default/files/dicionario_agroecologia_nov.pdf' target='_blank'>https://www.epsjv.fiocruz.br/sites/default/files/dicionario_agroecologia_nov.pdf</a>. Acesso em: 14 out. 2023.</p>

						<p><strong>GOMES, U. A. F.; PENA, J. L.; QUEIROZ, J. T. M</strong>. (org.) <em>Dicionário de saneamento básico [livro eletrônico]: pilares para uma gestão participativa nos municípios</em>. 1. ed. Belo Horizonte: 793, Projeto SanBas, 2022, v. 1. Disponível em: <a href='https://sanbas.eng.ufmg.br/leituras/' target='_blank'>https://sanbas.eng.ufmg.br/leituras/</a>.</p>

						<p><strong>HELLER, L.</strong> <em>Os Direitos Humanos à Água e ao Saneamento</em>. Rio de Janeiro: Editora Fiocruz, 2022.</p>

						<p><strong>HELLER, L.; PÁDUA, V. L. (org.).</strong> <em>Abastecimento de água para consumo humano</em>. Belo Horizonte: Editora UFMG, 2010. 859 p. (Ingenium).</p>

						<p><strong>INSTITUTO DE PESQUISA ECONÔMICA APLICADA.</strong> <em>Texto para discussão: Gestão comunitária da água: soluções e dificuldades do saneamento rural no Brasil</em>. Instituto de Pesquisa Econômica Aplicada. Brasília: Rio de Janeiro: Ipea, 2020.</p>

						<p><strong>LEÓN, R. M.</strong> Gestão comunitária da água na América Latina e Associatividade. In: <em>ENCONTRO NACIONAL DE GESTÃO COMUNITÁRIA DA ÁGUA</em>, 2. Venda Nova do Imigrante: ABES, 2018. 30 lâminas. Disponível em: <a href='https://abes-es.org.br/wp-content/uploads/2018/11/ROLANDO-MARIN-CLOCSAS.pdf' target='_blank'>https://abes-es.org.br/wp-content/uploads/2018/11/ROLANDO-MARIN-CLOCSAS.pdf</a>.</p>

						<p><strong>SANBAS.</strong> <em>Saneamento para todas as pessoas</em>. Disponível em: <a href='https://sanbas.eng.ufmg.br/municipios/' target='_blank'>https://sanbas.eng.ufmg.br/municipios/</a>.</p>

						<p><strong>TONETTI, A. L.; BRASIL, A. L.; MADRID, F. J. P. L.; FIGUEIREDO, I. C. S.; SCHNEIDER, J.; CRUZ, L. M. O.; DUARTE, N. C.; FERNANDES, P. M.; COASACA, R. L.; GARCIA, R. S.; MAGALHÃES, T. M</strong>. <em>Tratamento de esgotos domésticos em comunidades isoladas: referencial para a escolha de soluções</em>. Campinas, SP: Biblioteca/Unicamp, 2018.</p>

						<p><strong>VILLALOBOS, T.</strong> CLOCSAS: antecedentes, evolução e potencialidades. Panamá: AECID; Cooperación Española, 2017. 72 p. Disponível em: <a href='https://biblioteca.avina.net/biblioteca/clocsas-antecedentes-evolucion-y-potencialidades/' target='_blank'>https://biblioteca.avina.net/biblioteca/clocsas-antecedentes-evolucion-y-potencialidades/</a>.</p>
					
					</div>
				</div>
			</div>
		`,
	},
	autorMod1Aula1: {
		ariaLabel: 'autorMod1Aula1',
		modalSize: 'modal-xl',
		modalTitle: 'Sobre os autores',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<div class="mb-5">
						<h5 class="mb-3">Uende Aparecida Figueiredo Gomes</h5>
						<p class="mb-0">Professora-pesquisadora do Departamento de Engenharia Sanitária e Ambiental da Escola de Engenharia da Universidade Federal de Minas Gerais (DESA/UFMG).</p>
					</div>
					
					<div class="mb-5">
						<h5 class="mb-3">Alexandre Pessoa Dias </h5>
						<p class="mb-0">Coordenador acadêmico do curso, professor-pesquisador da Escola Politécnica de Saúde Joaquim Venâncio da Fiocruz (ESPJV/Fiocruz).</p>
					</div>

				</div>
			</div>
		`,
	},
	autorMod1Aula2: {
		ariaLabel: 'autorMod1Aula2',
		modalSize: 'modal-xl',
		modalTitle: 'Sobre os autores',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<div class="mb-5">
						<h5 class="mb-3">Uende Aparecida Figueiredo Gomes</h5>
						<p class="mb-0">Professora-pesquisadora do Departamento de Engenharia Sanitária e Ambiental da Escola de Engenharia da Universidade Federal de Minas Gerais (DESA/UFMG).</p>
					</div>
					
					<div class="mb-5">
						<h5 class="mb-3">Alexandre Pessoa Dias </h5>
						<p class="mb-0">Coordenador acadêmico do curso, professor-pesquisador da Escola Politécnica de Saúde Joaquim Venâncio da Fiocruz (ESPJV/Fiocruz).</p>
					</div>

				</div>
			</div>
		`,
	},
	autorMod1Aula3: {
		ariaLabel: 'autorMod1Aula3',
		modalSize: 'modal-xl',
		modalTitle: 'Sobre os autores',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<div class="mb-5">
						<h5 class="mb-3">Alexandre Pessoa Dias</h5>
						<p class="mb-0">Coordenador acadêmico do curso, professor-pesquisador da Escola Politécnica de Saúde Joaquim Venâncio da Fiocruz (ESPJV/Fiocruz).</p>
					</div>
					
					<div class="mb-5">
						<h5 class="mb-3">Mariely Daniel</h5>
						<p class="mb-0">Assessora da Coordenação de Saúde e Ambiente. Vice Presidência de Ambiente, Atenção e Promoção da Saúde Fiocruz</p>
					</div>

				</div>
			</div>
		`,
	},
	autorMod2Aula1: {
		ariaLabel: 'autorMod2Aula1',
		modalSize: 'modal-xl',
		modalTitle: 'Sobre o autor',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<div class="mb-5">
						<h5 class="mb-3">Bernardo Aleixo </h5>
						<p class="mb-0">Engenheiro de Saúde Pública e Pesquisador no grupo de Pesquisa em Políticas Públicas e Direitos Humanos em Saúde e Saneamento (PPDH) do Instituto de Pesquisa René Rachou IRR (Fiocruz Minas).</p>
					</div>

				</div>
			</div>
		`,
	},
	autorMod2Aula2: {
		ariaLabel: 'autorMod2Aula2',
		modalSize: 'modal-xl',
		modalTitle: 'Sobre os autores',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<div class="mb-5">
						<h5 class="mb-3">Bernardo Aleixo</h5>
						<p class="mb-0">Engenheiro de Saúde Pública e Pesquisado no grupo de Pesquisa em Política Públicas e Direitos Humanos em Saúde e Saneamento (PPDH) do Instituto de Pesquisa René Rachou IRR (Fiocruz Minas)</p>
					</div>
					
					<div class="mb-5">
						<h5 class="mb-3">Uende Aparecida Figueiredo Gomes</h5>
						<p class="mb-0">Professora e pesquisadora do Departamento de Engenharia Sanitária e Ambiental da Escola de Engenharia da Universidade Federal de Minas Gerais (DESA/UFMG).</p>
					</div>

				</div>
			</div>
		`,
	},
	autorMod3Aula1: {
		ariaLabel: 'autorMod3Aula1',
		modalSize: 'modal-xl',
		modalTitle: 'Sobre os autores',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<div class="mb-5">
						<h5 class="mb-3">Alexandre Pessoa Dias</h5>
						<p class="mb-0">Coordenador acadêmico do curso. Professor-pesquisador da Escola Politécnica de Saúde Joaquim Venâncio da Fundação Oswaldo Cruz (EPSJV/Fiocruz).<br>Colaboração: Mariely Daniel.</p>
					</div>
				</div>
			</div>
		`,
	},
	autorMod3Aula2: {
		ariaLabel: 'autorMod3Aula2',
		modalSize: 'modal-xl',
		modalTitle: 'Sobre os autores',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<div class="mb-5">
						<h5 class="mb-3">Alexandre Pessoa Dias</h5>
						<p class="mb-0">Coordenador acadêmico do curso. Professor-pesquisador da Escola Politécnica de Saúde Joaquim Venâncio da Fundação Oswaldo Cruz (EPSJV/Fiocruz).</p>
					</div>

					<div class="mb-5">
						<h5 class="mb-3">Bernardo Aleixo</h5>
						<p class="mb-0">Engenheiro de Saúde Pública e Pesquisado no grupo de Pesquisa em Política Públicas e Direitos Humanos em Saúde e Saneamento (PPDH) do Instituto de Pesquisa René Rachou IRR (Fiocruz Minas)</p>
					</div>
					
					<div class="mb-5">
						<h5 class="mb-3">Uende Aparecida Figueiredo Gomes</h5>
						<p class="mb-0">Professora e pesquisadora do Departamento de Engenharia Sanitária e Ambiental da Escola de Engenharia da Universidade Federal de Minas Gerais (DESA/UFMG).</p>
					</div>

					<div class="mb-5">
						<p class="mb-0">Colaboração: Mariely Daniel.</p>
					</div>

				</div>
			</div>
		`,
	},
	autorMod3Aula3: {
		ariaLabel: 'autorMod3Aula3',
		modalSize: 'modal-xl',
		modalTitle: 'Sobre os autores',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<div class="mb-5">
						<h5 class="mb-3">Uende Aparecida Figueiredo Gomes</h5>
						<p class="mb-0">Professora e pesquisadora do Departamento de Engenharia Sanitária e Ambiental da Escola de Engenharia da Universidade Federal de Minas Gerais (DESA/UFMG).</p>
					</div>
					
					<div class="mb-5">
						<h5 class="mb-3">Bernardo Aleixo</h5>
						<p class="mb-0">Engenheiro de Saúde Pública e Pesquisado no grupo de Pesquisa em Política Públicas e Direitos Humanos em Saúde e Saneamento (PPDH) do Instituto de Pesquisa René Rachou IRR (Fiocruz Minas)</p>
					</div>

				</div>
			</div>
		`,
	},
	glossario: {
		ariaLabel: 'glossario',
		modalSize: 'modal-lg',
		modalTitle: 'Glossário',
		modalBody: `
			<div class="aba">
				<ul class="nav nav-pills nav-fill mb-3" id="pills-tab" role="tablist">
					<li class="nav-item" role="presentation">
						<button class="nav-link active" id="pills-atores-tab" data-bs-toggle="pill" data-bs-target="#pills-atores" type="button" role="tab" aria-controls="pills-atores" aria-selected="true">Atores</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link" id="pills-seguranca-tab" data-bs-toggle="pill" data-bs-target="#pills-seguranca" type="button" role="tab" aria-controls="pills-seguranca" aria-selected="false">Segurança</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link" id="pills-processos-tab" data-bs-toggle="pill" data-bs-target="#pills-processos" type="button" role="tab" aria-controls="pills-processos" aria-selected="false">Processos</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link" id="pills-documentos-tab" data-bs-toggle="pill" data-bs-target="#pills-documentos" type="button" role="tab" aria-controls="pills-documentos" aria-selected="false">Documentos</button>
					</li>
				</ul>
				<div class="tab-content p-0" id="pills-tabContent">
					<!-- Atores -->
					<div class="tab-pane fade show active" id="pills-atores" role="tabpanel" aria-labelledby="pills-atores-tab">
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-a">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-a" aria-expanded="true" aria-controls="collapse1-a">A</button>
								</h2>
								<div id="collapse1-a" class="accordion-collapse collapse" aria-labelledby="heading1-a" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>ANVISA</strong></p>
										<p>Agência Nacional de Vigilância Sanitária, autarquia que exerce atividades de regulação, normatização, controle e fiscalização na área de vigilância sanitária.</p>
										<p><strong>Autoridade Nacional Reguladora do Medicamento (ANARME) ou Entidade Reguladora de Moçambique</strong></p>
										<p>Instituição pública, dotada de personalidade jurídica, autonomia administrativa, financeira e patrimonial, que desempenha funções de regulamentação, supervisão, fiscalização e sancionamento, nos termos definidos pela Lei.</p>
										<p><strong>Autoridades Regulatórias</strong></p>
										<p>Instituições que têm poder regulatório, ou seja, autoridades que analisam os dados submetidos e conduzem inspeções. Podem também serem denominadas autoridades competentes.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-c">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-c" aria-expanded="false" aria-controls="collapse1-c">C</button>
								</h2>
								<div id="collapse1-c" class="accordion-collapse collapse" aria-labelledby="heading1-c" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Centro de Pesquisa</strong></p>
										<p>Local onde, usualmente, as atividades ligadas ao estudo são conduzidas. Ensaios Clínicos podem ser conduzidos em um único centro ou em vários centros simultaneamente (Estudos Multicêntricos).</p>
										<p><strong>Comitê de Coordenação</strong></p>
										<p>Comitê organizado pelo patrocinador para coordenar a condução de um estudo multicêntrico.</p>
										<p><strong>Comitê de Ética em Pesquisa (CEP)</strong></p>
										<p>Organização independente, multidisciplinar, cuja responsabilidade é garantir a proteção dos direitos, segurança e bem-estar dos seres humanos envolvidos em um estudo, por meio da aprovação e revisão contínua do protocolo do estudo e dos materiais e métodos utilizados para a obtenção e documentação do consentimento dos participantes de pesquisa.</p>
										<p><strong>Comitê de Ética Independente (IEC)</strong></p>
										<p>Uma organização independente (um conselho de revisão ou um comitê institucional, regional, nacional ou supranacional) constituído por profissionais da área médica/científica e membros pertencentes a outras áreas, cuja responsabilidade é garantir a proteção dos direitos, segurança e bem-estar dos seres humanos envolvidos em um estudo e assegurar publicamente a sua proteção, através da revisão e aprovação/parecer favorável sobre o protocolo do estudo, adequação dos investigadores, recursos e dos materiais e métodos utilizados para a obtenção e documentação do consentimento dos participantes de pesquisa, entre outras atividades. A situação legal, composição, função, operação e exigências regulatórias pertinentes ao Comitê de Ética Independente podem ser diferentes em cada país, mas devem permitir que ele atue em consonância com o Guia das BPC (ICH).</p>
										<p><strong>Comitê Independente de Monitoramento de Dados (IDMC)</strong></p>
										<p>Também conhecido como Conselho de Monitoramento de Dados e Segurança, Comitê de Monitoramento ou Comitê de Monitoramento de Dados. É um comitê independente de monitoramento de dados que, pode ser implementado pelo investigador, para avaliar periodicamente o desenvolvimento de um estudo clínico, os dados de segurança e os limites críticos de eficácia, além de recomendar ao patrocinador a continuidade, a modificação, ou o encerramento do estudo.</p>
										<p><strong>Comitê Institucional de Bioética Para Saúde (CIBS)</strong></p>
										<p>Entidade criada pelo Comitê Nacional de Bioética para a Saúde (CNBS) de Moçambique, com competências delegadas para avaliação de aspectos éticos de propostas de investigação em saúde a nível de uma ou mais instituições, e que apenas efetua avaliação de protocolos de investigação provenientes ou realizados em colaboração com as respectivas instituições.</p>
										<p><strong>Comitê Nacional de Bioética para a Saúde (CNBS) de Moçambique</strong></p>
										<p>Órgão independente multidisciplinar, que faz avaliação dos protocolos de investigação na área da saúde para aferir a aplicação dos princípios éticos na realização da pesquisa tendo em conta a proteção dos participantes. Assegura a proteção dos direitos, segurança e bem-estar dos participantes nos estudos. Faz também a tutela e monitoria da atividade dos Comités Institucionais de Bioética para a Saúde (CIBS). O CNBS e os CIBS avaliam os aspectos metodológicos de protocolos de investigação quando os Comitês Científicos das instituições proponentes de protocolos não estiverem em funcionamento, e sempre que houver aspectos metodológicos que impactem a Bioética.</p>
										<p><strong>CONEP</strong></p>
										<p>Comissão Nacional de Ética em Pesquisa, é uma instância colegiada, de natureza consultiva, deliberativa, normativa, educativa e independente, vinculada ao Conselho Nacional de Saúde/MS.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-i">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-i" aria-expanded="false" aria-controls="collapse1-i">I</button>
								</h2>
								<div id="collapse1-i" class="accordion-collapse collapse" aria-labelledby="heading1-i" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Instituição</strong></p>
										<p>Qualquer entidade, agência ou instalação médica ou odontológica onde sejam conduzidos estudos clínicos.</p>
										<p><strong>Investigador de Coordenação</strong></p>
										<p>Um investigador responsável pela coordenação de investigadores de diferentes centros participantes de um estudo multicêntrico.</p>
										<p><strong>Investigador/Investigador Principal/Pesquisador</strong></p>
										<p>Pessoa responsável por conduzir o estudo clínico em um centro de pesquisa. Pesquisador responsável ou Investigador Principal é o responsável legal pelo estudo, líder da equipe do estudo. Um médico qualificado (ou dentista, conforme o caso), que for um investigador ou um subinvestigador do ensaio, deve ser responsável por todas as decisões médicas (ou odontológicas) relacionadas ao ensaio.</p>
										<p><strong>Investigador/ Instituição</strong></p>
										<p>Expressão que significa “o investigador e/ou instituição”, quando e onde solicitada pelas exigências regulatórias aplicáveis.</p>
										<p><strong>Investigador-Patrocinador</strong></p>
										<p>Indivíduo que implementa e conduz, sozinho ou em grupo, um estudo clínico e sob cuja imediata direção o produto sob investigação é administrado, fornecido ou utilizado por um paciente. O termo não inclui qualquer pessoa que não um indivíduo (ex.: não inclui uma corporação ou uma agência). As responsabilidades de um investigador-patrocinador incluem tanto as do patrocinador como as do investigador.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-o">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-o" aria-expanded="false" aria-controls="collapse1-o">O</button>
								</h2>
								<div id="collapse1-o" class="accordion-collapse collapse" aria-labelledby="heading1-o" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Organização de Pesquisa Contratada (CRO)</strong></p>
										<p>Uma pessoa ou organização (comercial, acadêmica ou outra) contratada pelo patrocinador para realizar um ou mais de seus deveres e funções relativos a estudos clínicos.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-p">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-p" aria-expanded="false" aria-controls="collapse1-p">P</button>
								</h2>
								<div id="collapse1-p" class="accordion-collapse collapse" aria-labelledby="heading1-p" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Participante de Pesquisa</strong></p>
										<p>Pela regulamentação brasileira, indivíduo que, de forma esclarecida e voluntária, ou sob o esclarecimento e autorização de seu(s) responsável(eis) legal(ais), aceita ser pesquisado. Podem pertencer ao grupo dos que recebem o produto sob investigação ou ao grupo de controle. Além disso, podem ser portadores de alguma comorbidade/patologia ou indivíduos saudáveis.</p>
										<p><strong>Populações Vulneráveis</strong></p>
										<p>Indivíduos cuja vontade de participar do estudo possa ser indevidamente influenciada pela expectativa, justificada ou não, de benefícios associados à participação, ou de uma reação negativa, em caso de recusa, por parte de membros seniores de alguma hierarquia da qual façam parte ou à qual estejam submetidos. Exemplos são indivíduos pertencentes a grupos com uma estrutura hierárquica constituída, como estudantes de medicina, farmácia, odontologia e enfermagem, funcionários de hospitais e laboratórios, da indústria farmacêutica, membros das forças armadas e detentos. Outros participantes de pesquisa vulneráveis são aqueles portadores de doenças incuráveis ou que estejam em casas de repouso, pessoas desempregadas ou miseráveis, pacientes em situações de emergência, grupos étnicos minoritários, pessoas sem moradia, nômades, refugiados, menores e aqueles incapazes de atestar o próprio consentimento.</p>
										<p><strong>Patrocinador</strong></p>
										<p>Pessoa física ou jurídica, pública ou privada que apoia a pesquisa de variadas formas, seja com financiamento, infraestrutura, recursos humanos ou apoio institucional.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-r">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-r" aria-expanded="false" aria-controls="collapse1-r">R</button>
								</h2>
								<div id="collapse1-r" class="accordion-collapse collapse" aria-labelledby="heading1-r" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Representante legal</strong></p>
										<p>Pessoa física ou jurídica autorizada pela legislação aplicável para consentir, em nome do participante de pesquisa, sua participação em um estudo clínico.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-s">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-s" aria-expanded="false" aria-controls="collapse1-s">S</button>
								</h2>
								<div id="collapse1-s" class="accordion-collapse collapse" aria-labelledby="heading1-s" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Sub Investigador</strong></p>
										<p>Qualquer membro específico da equipe do estudo clínico, designado e supervisionado pelo investigador no centro de pesquisa para conduzir procedimentos essenciais e/ou tomar decisões importantes relacionadas ao estudo.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading1-t">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-t" aria-expanded="false" aria-controls="collapse1-t">T</button>
								</h2>
								<div id="collapse1-t" class="accordion-collapse collapse" aria-labelledby="heading1-t" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Testemunha Imparcial</strong></p>
										<p>Pessoa, não relacionada ao estudo, não sendo injustamente influenciada pelas pessoas nele envolvidas, que participe do processo de consentimento, inclusive registrando participação assinando o Termo de Consentimento Livre e Esclarecido (TCLE), caso o participante de pesquisa, ou seu responsável legal, não saiba ler e/ou escrever, garantindo assim que as informações redigidas destinadas aos participantes sejam as mesmas informadas verbalmente.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- Segurança -->
					<div class="tab-pane fade" id="pills-seguranca" role="tabpanel" aria-labelledby="pills-seguranca-tab">
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-c">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-c" aria-expanded="true" aria-controls="collapse2-c">C</button>
								</h2>
								<div id="collapse2-c" class="accordion-collapse collapse" aria-labelledby="heading2-c" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Comparador (Produto)</strong></p>
										<p>Um produto sob investigação ou comercializado ou placebo, usado como referência em um estudo clínico.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-d">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-d" aria-expanded="false" aria-controls="collapse2-d">D</button>
								</h2>
								<div id="collapse2-d" class="accordion-collapse collapse" aria-labelledby="heading2-d" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Desvio de Protocolo</strong></p>
										<p>Qualquer não cumprimento dos procedimentos ou requisitos definidos na versão aprovada do protocolo, sem implicações maiores na integridade do ensaio, na qualidade dos dados ou nos direitos e segurança dos participantes.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-e">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-e" aria-expanded="false" aria-controls="collapse2-e">E</button>
								</h2>
								<div id="collapse2-e" class="accordion-collapse collapse" aria-labelledby="heading2-e" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Evento Adverso (EA)</strong></p>
										<p>Qualquer ocorrência médica inconveniente ou sinal desfavorável ou não planejado (incluindo achados laboratoriais anormais), sintoma, ou doença temporariamente associada com o uso de um produto farmacêutico sob investigação, relacionadas ou não ao produto farmacêutico sob investigação, e que não, necessariamente, tenha uma relação causal com o tratamento.</p>
										<p><strong>Evento Adverso Grave (EAG) / Evento Adverso Sério (EAS)</strong></p>
										<p>Qualquer ocorrência médica adversa que, em qualquer dose: - resulte em morte, - represente risco à vida, - implique em hospitalização ou prolongamento de uma hospitalização existente, - resulte em persistente inabilidade/incapacidade significativa, ou - cause anomalia congênita.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-p">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-p" aria-expanded="false" aria-controls="collapse2-p">P</button>
								</h2>
								<div id="collapse2-p" class="accordion-collapse collapse" aria-labelledby="heading2-p" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Placebo</strong></p>
										<p>Formulação sem efeito farmacológico, administrada ao participante do ensaio clínico com a finalidade de mascaramento ou de ser comparador.</p>
										<p><strong>Produto Investigacional (ou produto experimental)</strong></p>
										<p>Forma farmacêutica de um ingrediente ativo ou placebo que está sendo provada ou usada como referência em um estudo clínico (Ensaio Clínico). Incluindo produto com autorização prévia de comercialização, mas utilizado ou formulado ou empacotado de maneira diferente daquela aprovada.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-r">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-r" aria-expanded="false" aria-controls="collapse2-r">R</button>
								</h2>
								<div id="collapse2-r" class="accordion-collapse collapse" aria-labelledby="heading2-r" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Reação Adversa ao medicamento (RAM)</strong></p>
										<p>Qualquer resposta prejudicial ou indesejável, não intencional, a um medicamento, que ocorre nas doses usualmente empregadas para profilaxia, diagnóstico ou terapia de doenças. No conceito de RAM pode-se observar a existência de uma relação causal entre o uso do medicamento e a ocorrência do evento.</p>
										<p><strong>Reação Adversa Inesperada ao medicamento</strong></p>
										<p>Uma reação adversa, cuja natureza ou severidade não seja condizente com as informações aplicáveis ao produto (ex.: Brochura do Investigador para produtos sob investigação não aprovados ou bula/resumo das características do produto para os aprovados).</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading2-v">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2-v" aria-expanded="false" aria-controls="collapse2-v">V</button>
								</h2>
								<div id="collapse2-v" class="accordion-collapse collapse" aria-labelledby="heading2-v" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Violação de protocolo de ensaio clínico</strong></p>
										<p>Desvio de protocolo de ensaio clínico que possa afetar a qualidade dos dados, que comprometa a integridade do estudo ou que possa afetar a segurança ou os direitos dos participantes do ensaio clínico.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- Processos -->
					<div class="tab-pane fade" id="pills-processos" role="tabpanel" aria-labelledby="pills-processos-tab">
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-a">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-a" aria-expanded="true" aria-controls="collapse3-a">A</button>
								</h2>
								<div id="collapse3-a" class="accordion-collapse collapse" aria-labelledby="heading3-a" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Adesão (em relação aos estudos)</strong></p>
										<p>Seguir todas as exigências relativas ao estudo, às Boas Práticas Clínicas e às exigências regulatórias aplicáveis.</p>
										<p><strong>Acesso Direto</strong></p>
										<p>Permissão para examinar, analisar, verificar e reproduzir quaisquer registros e relatórios que sejam importantes para avaliar o estudo clínico. Qualquer parte (ex.: autoridades regulatórias nacionais e estrangeiras, auditores e monitores do patrocinador) com acesso direto deverá ter o devido cuidado, com as restrições estabelecidas pelas exigências regulatórias aplicáveis, para que se mantenha confidencialidade dos participantes de pesquisa e das informações de propriedade do patrocinador.</p>
										<p><strong>Assentimento livre e esclarecido</strong></p>
										<p>Anuência do participante da pesquisa – criança, adolescente ou indivíduos impedidos de forma temporária ou não de consentir, na medida de sua compreensão e respeitadas suas singularidades, após esclarecimento sobre a natureza da pesquisa, justificativa, objetivos, métodos, potenciais benefícios e riscos. A obtenção do assentimento não elimina a necessidade do consentimento do responsável.</p>
										<p><strong>Auditoria</strong></p>
										<p>Verificação independente e sistemática das atividades e documentos relativos ao estudo, a fim de determinar se o protocolo, os procedimentos operacionais padrões do patrocinador (POP), as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis estão sendo cumpridas.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-b">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-b" aria-expanded="false" aria-controls="collapse3-b">B</button>
								</h2>
								<div id="collapse3-b" class="accordion-collapse collapse" aria-labelledby="heading3-b" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Bem-estar (dos participantes de pesquisa)</strong></p>
										<p>Integridade física e mental dos indivíduos envolvidos em um estudo clínico.</p>
										<p><strong>Boas Práticas Clínicas (BPC)</strong></p>
										<p>Padrão de qualidade ética e científica para o planejamento, condução, registro e relato de estudos clínicos que envolvam a participação de seres humanos. O objetivo é assegurar a proteção dos direitos, integridade e confidencialidade dos participantes da pesquisa, assim como, a credibilidade dos dados e a precisão dos resultados.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-c">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-c" aria-expanded="false" aria-controls="collapse3-c">C</button>
								</h2>
								<div id="collapse3-c" class="accordion-collapse collapse" aria-labelledby="heading3-c" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Caráter Cego/Mascaramento</strong></p>
										<p>Procedimento no qual uma ou mais partes envolvidas no estudo é mantida desinformada sobre as indicações do tratamento. O caráter cego geralmente refere-se aos participantes de pesquisa. Caso o estudo seja duplo-cego, significa que não somente o participante, mas os investigadores, monitores e, em alguns casos, os analistas de dados são mantidos desinformados quanto ao tratamento.</p>
										<p><strong>Confidencialidade </strong></p>
										<p>Prevenir a divulgação para outros, que não os indivíduos autorizados, sobre a identidade de um participante de pesquisa ou de uma informação de propriedade do patrocinador.</p>
										<p><strong>Consentimento Livre e Esclarecido</strong></p>
										<p>Processo através do qual um participante confirma voluntariamente sua intenção de participar em um ensaio em particular, após ter sido informado de todos os aspectos do ensaio que forem relevantes para a decisão do participante de entrar no estudo.</p>
										<p><strong>Controle de Qualidade</strong></p>
										<p>Técnicas e atividades operacionais adotadas dentro do sistema de garantia de qualidade para assegurar que todas as exigências de qualidade relacionadas às atividades do estudo sejam atendidas.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-e">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-e" aria-expanded="false" aria-controls="collapse3-e">E</button>
								</h2>
								<div id="collapse3-e" class="accordion-collapse collapse" aria-labelledby="heading3-e" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Estudo Clínico</strong></p>
										<p>Qualquer investigação em seres humanos que pretenda descobrir ou verificar os efeitos clínicos, farmacêuticos e/ou outros efeitos farmacodinâmicos de um produto sob investigação; e/ou identificar quaisquer reações adversas a um produto sob investigação; e/ou estudar a absorção, distribuição, metabolismo e excreção de um produto sob investigação com o objetivo de apurar sua segurança e/ou eficácia.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-f">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-f" aria-expanded="false" aria-controls="collapse3-f">F</button>
								</h2>
								<div id="collapse3-f" class="accordion-collapse collapse" aria-labelledby="heading3-f" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Farmacocinética</strong></p>
										<p>Em geral, são todas as modificações que um sistema biológico produz em um princípio ativo. É o estudo da cinética (relação quantitativa entre a variável independente tempo e a variável dependente concentração) dos processos de absorção, distribuição, biotransformação e excreção dos medicamentos (princípios ativos e/ou seus metabolitos).</p>
										<p><strong>Farmacodinâmica</strong></p>
										<p>Modificações que um princípio ativo produz em um sistema biológico, ou seja, é o estudo dos efeitos bioquímicos e fisiológicos dos medicamentos e seus mecanismos de ação.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-g">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-g" aria-expanded="false" aria-controls="collapse3-g">G</button>
								</h2>
								<div id="collapse3-g" class="accordion-collapse collapse" aria-labelledby="heading3-g" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Garantia de Qualidade</strong></p>
										<p>Todas as ações planejadas e sistemáticas realizadas para garantir que o estudo seja desenvolvido e os dados sejam gerados, documentados, relatados e arquivados conforme as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-i">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-i" aria-expanded="false" aria-controls="collapse3-i">I</button>
								</h2>
								<div id="collapse3-i" class="accordion-collapse collapse" aria-labelledby="heading3-i" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Inspeção</strong></p>
										<p>Atividade de uma autoridade regulatória a fim de avaliar documentos, instalações, registros e quaisquer outros recursos que se considerem relacionados ao estudo clínico, os quais podem estar localizados na instituição onde está sendo conduzido o estudo, nas dependências do patrocinador e/ou nas organizações de pesquisa contratadas (CRO), ou em outros estabelecimentos tidos como apropriados pelas autoridades regulatórias.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-m">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-m" aria-expanded="false" aria-controls="collapse3-m">M</button>
								</h2>
								<div id="collapse3-m" class="accordion-collapse collapse" aria-labelledby="heading3-m" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Monitoria</strong></p>
										<p>Atividade de acompanhamento do progresso de um estudo clínico, garantindo que sua condução, registros e relatos sejam realizados de acordo com o protocolo, os Procedimentos Operacionais Padrão (POP), as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading3-r">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3-r" aria-expanded="false" aria-controls="collapse3-r">R</button>
								</h2>
								<div id="collapse3-r" class="accordion-collapse collapse" aria-labelledby="heading3-r" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Randomização</strong></p>
										<p>Processo de designação aleatória dos participantes de pesquisa ao tratamento ou ao grupo-controle, de forma a reduzir parcialidades.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- Documentos  -->
					<div class="tab-pane fade" id="pills-documentos" role="tabpanel" aria-labelledby="pills-documentos-tab">
						<div class="accordion accordion-flush" id="accordionExample2">
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-a">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-a" aria-expanded="true" aria-controls="collapse4-a">A</button>
								</h2>
								<div id="collapse4-a" class="accordion-collapse collapse" aria-labelledby="heading4-a" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Aprovação (em relação às Instâncias Regulatórias)</strong></p>
										<p>É a decisão afirmativa de que o estudo clínico foi analisado e pode ser conduzido, seguindo as Boas Práticas Clínicas (BPC) e as exigências regulatórias aplicáveis, observando as recomendações específicas de cada uma destas instâncias.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-b">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-b" aria-expanded="false" aria-controls="collapse4-b">B</button>
								</h2>
								<div id="collapse4-b" class="accordion-collapse collapse" aria-labelledby="heading4-b" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Brochura do Investigador</strong></p>
										<p>Documento que apresenta a compilação dos dados clínicos e não clínicos acerca dos produtos sob investigação, relevante para o estudo do(s) produto(s) sob investigação em seres humanos. No caso de medicamento já comercializado pode ser substituído pela Bula.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-c">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-c" aria-expanded="false" aria-controls="collapse4-c">C</button>
								</h2>
								<div id="collapse4-c" class="accordion-collapse collapse" aria-labelledby="heading4-c" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Certificado de Auditoria</strong></p>
										<p>Declaração de confirmação do auditor de que a auditoria foi realizada.</p>
										<p><strong>Código de Identificação do Participante</strong></p>
										<p>Código identificador exclusivo, designado pelo investigador (ou pelo patrocinador) para cada participante de pesquisa, com intuito de manter sua identidade em sigilo.</p>
										<p><strong>Contrato</strong></p>
										<p>Formato de documento que apresenta o acordo por escrito, datado e assinado entre duas ou mais partes envolvidas que estabeleça quaisquer determinações de delegação e distribuição de tarefas e obrigações e, se apropriado, sobre assuntos financeiros. O protocolo pode servir de base para o contrato.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-d">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-d" aria-expanded="false" aria-controls="collapse4-d">D</button>
								</h2>
								<div id="collapse4-d" class="accordion-collapse collapse" aria-labelledby="heading4-d" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Dados Fonte</strong></p>
										<p>Todas as informações dos registros originais, sendo cópias autenticadas de registros originais de achados clínicos, observações ou ainda outras atividades de uma pesquisa clínica necessárias para a reconstrução e avaliação do estudo. Os dados fonte estão contidos nos documentos fonte (registros originais ou cópias autenticadas).</p>
										<p><strong>Documentação</strong></p>
										<p>Todos os registros, sob qualquer forma (incluindo dados escritos, eletrônicos, magnéticos e ópticos, eletrocardiogramas, raios-X e demais exames de imagem, entre outros), que descrevem ou registram os métodos, condutas e/ou resultados de um estudo, os fatores que o afetaram e as ações realizadas.</p>
										<p><strong>Documentos Essenciais</strong></p>
										<p>Documentos que, individual ou coletivamente, permitem a avaliação da condução ética e da qualidade dos dados produzidos por um estudo clínico.</p>
										<p><strong>Documentos Fonte</strong></p>
										<p>Documentos, dados e registros originais (ex.: registros hospitalares, tabelas clínicas e administrativas, anotações laboratoriais, memorandos, diários de paciente ou checklists de avaliação, registros de prescrição farmacêutica, dados registrados por documentos automatizados, cópias ou transcrições autenticadas após verificação de sua precisão, microficha, negativos fotográficos, microfilmes ou registros magnéticos, raios-X, arquivos de pacientes e registros arquivados na farmácia, nos laboratórios e nos departamentos envolvidos no estudo clínico).</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-e">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-e" aria-expanded="false" aria-controls="collapse4-e">E</button>
								</h2>
								<div id="collapse4-e" class="accordion-collapse collapse" aria-labelledby="heading4-e" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Emenda ao Protocolo</strong></p>
										<p>Documento que descreve as alterações ou esclarecimentos formais feitos ao protocolo.</p>
										<p><strong>Exigências Regulatórias Aplicáveis</strong></p>
										<p>Quaisquer leis ou regulamentos sobre a condução de estudos que envolvem seres humanos, com produtos sob investigação ou não.</p>
										<p><strong>Ficha Clínica (Case Report Form - CRF)</strong></p>
										<p>Documento impresso, óptico ou eletrônico elaborado para registrar todas as informações exigidas pelo protocolo a serem relatadas ao patrocinador sobre cada participante de pesquisa.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-p">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-p" aria-expanded="false" aria-controls="collapse4-p">P</button>
								</h2>
								<div id="collapse4-p" class="accordion-collapse collapse" aria-labelledby="heading4-p" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Parecer</strong></p>
										<p>Documento que emite o resultado da análise em relação ao estudo submetido ao Comitê de Ética em Pesquisa (CEP).</p>
										<p><strong>Procedimentos Operacionais Padrão (POP)</strong></p>
										<p>Instruções escritas e detalhadas para a uniformidade de desempenho de uma determinada função.</p>
										<p><strong>Produto sob investigação</strong></p>
										<p>Forma de apresentação farmacêutica de um princípio ativo ou placebo sendo testado ou usado como referência em um estudo clínico, incluindo um produto com autorização comercial / de comercialização quando usado ou apresentado (formulado ou embalado) sob uma forma diferente da aprovada, ou usado para uma indicação não aprovada, ou quando usado para obter maiores informações sobre a forma aprovada.</p>
										<p><strong>Protocolo</strong></p>
										<p>Documento que descreve toda a base do estudo, contendo justificativa, objetivos, desenho, metodologia, considerações estatísticas e organização do estudo. No entanto, estas informações podem ser fornecidas, de forma mais detalhada, por outros documentos referenciados pelo protocolo. Considera-se o termo protocolo o documento em si e às emendas ao protocolo.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-r">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-r" aria-expanded="false" aria-controls="collapse4-r">R</button>
								</h2>
								<div id="collapse4-r" class="accordion-collapse collapse" aria-labelledby="heading4-r" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Relatório de Auditoria</strong></p>
										<p>Avaliação por escrito realizada pelo auditor do patrocinador sobre os resultados e impressões da auditoria.</p>
										<p><strong>Relatório de Estudo Clínico</strong></p>
										<p>Descrição por escrito do ensaio/estudo de qualquer agente terapêutico, profilático ou de diagnóstico conduzido em seres humanos, no qual as descrições clínicas e estatísticas, apresentações e análises estão plenamente integradas em um único relatório.</p>
										<p><strong>Relatório Interino do Estudo Clínico</strong></p>
										<p>Relatório contendo os resultados intermediários e sua avaliação baseada em análises realizadas no decorrer de um estudo.</p>
										<p><strong>Relatório de Monitoria</strong></p>
										<p>Relatório que descreve os achados e as impressões do monitor para o patrocinador, após cada visita de monitoria do estudo e/ou outros comunicados relacionados, de acordo com os POP do patrocinador.</p>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading4-t">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4-t" aria-expanded="false" aria-controls="collapse4-t">T</button>
								</h2>
								<div id="collapse4-t" class="accordion-collapse collapse" aria-labelledby="heading4-t" data-bs-parent="">
									<div class="accordion-body">
										<p><strong>Trilha de Auditoria</strong></p>
										<p>Documentação que permite a reconstrução do curso dos eventos e /ou achados.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		`,
	},
};

// Get all buttons and links that have "modal" in the data-bs-toggle
const modalButtons = document.querySelectorAll('[data-bs-toggle="modal"]');

document.addEventListener('DOMContentLoaded', function (event) {
	//do work

	modalButtons.forEach(btn => {
		// Check if the modal exist
		const modalId = btn.getAttribute('data-bs-target').slice(1);
		const createdModalId = document.getElementById(modalId);
		const modalOrigin = btn.getAttribute('data-bs-target').slice(7);
		const hasPropriety = Object.hasOwn(modalInfos, modalOrigin);

		if (!createdModalId && hasPropriety) {
			// console.log('modalOrigin: ' + modalOrigin + ' hasPropriety: ' + hasPropriety);

			// If don't exist create one
			createModal(modalId);
		}
	});
});

function createModal(id) {
	const newModal = document.createElement('div');
	const modalLabel = id.slice(6);

	newModal.classList.add('modal', 'fade');
	newModal.setAttribute('id', id);
	newModal.setAttribute('tabindex', '-1');
	newModal.setAttribute('aria-labelledby', modalLabel);
	newModal.setAttribute('aria-hidden', 'true');

	newModal.innerHTML = `
		<div class="modal-dialog ${modalInfos[modalLabel].modalSize}">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="${modalInfos[modalLabel].ariaLabel}">${modalInfos[modalLabel].modalTitle}</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					${modalInfos[modalLabel].modalBody}
				</div>
				<div class="modal-footer">
					<button type="button" class="fio-button fio-button-primary" data-bs-dismiss="modal">Fechar</button>
				</div>
			</div>
		</div>
	`;

	document.body.appendChild(newModal);
}

//Before and after
const container = document.querySelector('.antes-e-depois--container');
document.querySelector('.antes-e-depois--slider').addEventListener('input', e => {
	container.style.setProperty('--position', `${e.target.value}%`);
});
