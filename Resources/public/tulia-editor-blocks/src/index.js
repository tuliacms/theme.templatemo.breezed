const TuliaEditor = require('TuliaEditor');

TuliaEditor.trans('pl', 'Templatemo/Breezed', {
    'Show button': 'Pokaż przycisk',
    'Contact form': 'Formularz kontaktowy',
    'Here will be rendered form.': 'Tutaj będzie miejsce na formularz.',
    'Background overlay opacity': 'Przezroczystość nakładki tła',
});

TuliaEditor.block(require('./AboutUs/AboutUs.js').default);
TuliaEditor.block(require('./Features/Features.js').default);
TuliaEditor.block(require('./Contact/Contact.js').default);
TuliaEditor.block(require('./CallToAction/CallToAction.js').default);
