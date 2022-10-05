const Editor = require('./Editor.vue').default;
const Render = require('./Render.vue').default;
const Manager = require('./Manager.vue').default;

export default {
    theme: 'Templatemo/Breezed',
    framework: 'bootstrap-5',
    code: 'AboutUs',
    name: 'AboutUs',
    icon: 'data:image/png;base64,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',
    manager: Manager,
    editor: Editor,
    render: Render,
    defaults: {
        buttonLabel: 'Learn more',
        buttonIcon: 'fas fa-chevron-right',
        showButton: 'yes',
        label: 'ABOUT US',
        title: 'We work with top brands and startups',
        content: '<p>Breezed HTML Template is provided by TemplateMo for absolutely free of charge. You can download, edit and use this for your non-commercial and commercial websites.</p><p>Redistributing this template as a downloadable ZIP file on any template collection website is strictly prohibited. You will need to talk to us if you want to redistribute this template. Thank you.</p><p>This is a Bootstrap v4.3.1 CSS layout. Do you like it? You can feel free to talk to us if you have anything.</p>',
        features: [{
            id: '1',
            icon: 'fas fa-rocket',
            title: 'TOP NOTCH',
        },{
            id: '2',
            icon: 'fas fa-globe-europe',
            title: 'ROBUST',
        },{
            id: '3',
            icon: 'fas fa-rocket',
            title: 'RELIABLE',
        },{
            id: '4',
            icon: 'fas fa-globe-europe',
            title: 'UP-TO-DATE',
        }]
    }
};
