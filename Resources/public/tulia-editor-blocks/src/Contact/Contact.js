const Editor = require('./Editor.vue').default;
const Render = require('./Render.vue').default;
const Manager = require('./Manager.vue').default;

export default {
    theme: 'Templatemo/Breezed',
    framework: 'bootstrap-5',
    code: 'Contact',
    name: 'Contact',
    icon: 'data:image/png;base64,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',
    manager: Manager,
    editor: Editor,
    render: Render,
    defaults: {
        label: 'CONTACT US',
        title: 'Feel free to keep in touch with us!',
        description: '',
        contactFormId: null,
        contactDetails: [{
            id: '1',
            icon: 'fas fa-phone',
            text: '010-020-0860'
        },{
            id: '2',
            icon: 'fas fa-envelope',
            text: 'info@company.com'
        },{
            id: '3',
            icon: 'fas fa-globe',
            text: 'www.company.com'
        }]
    }
};
