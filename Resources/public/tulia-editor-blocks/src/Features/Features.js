const Editor = require('./Editor.vue').default;
const Render = require('./Render.vue').default;
const Manager = require('./Manager.vue').default;

export default {
    theme: 'Templatemo/Breezed',
    framework: 'bootstrap-5',
    code: 'Features',
    name: 'Features',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAABuCAMAAAA5xf5aAAAAilBMVEX////39vbe3+Ds6urm5uju7+9ztJzj4eDR09fX1dTi3tnJztPd1s/Y2tulzbns5eDd2dekp6p+uqXRzMnt9vfX6+jLx8PEvLaclpHX4OitqaessbiCgYG+w8e2usCIjZTk8Pe11NKSxbO0s7Kgn5+Yy8CVnaV0c3XQ4tXD5ePB28tncHrI095MVl4lcCa3AAAEQklEQVR42uzBgQAAAACAoP2pF6kCAAAAAAAAmN05pgEAAIEYOOGA928VEwwk3AloCgAA8EYlq7nq64vDLLksuQ0CUbTxjChHaHAajQHxjASW7JHy/78XPLErVVkpKRZzig0Lbp1L9wPCKaU3+KTXg7HOesMSdGZOJgftkcE/cOaC88uzfDPLoA/Zaxu91kRnCzKYt4TG5jefw38oogpRIctY/Nqty8qaWSILQUVU2Ee5/+M5vXw8c1V00erBuhmh0au2rXP25yvspxFi4u/X6f1xXZZ5QT2r19U7R1ycwUW96HWZ9RLHtLf5H8WuPF5L0qbkmN0oIywqmgEQy3EkL+uPvb0LJfexTt8DSUw1ikljIfWDwm89Ywz2UyxHgCsfH9bHF3vwxnZN9jIQCSl5L09qM162R4M7ev+l2KEcfIcHE05DfxpalCzgMW0qgJQdtpsisIcr/Y2AWghKz6X4ywRVqK/4hAvxGXuGWtzTuLiQ6esqPplo4QYVp15Kk5Ff6iqKG1TnSu8rCtX4oPfSZLpVVPzFTr3rNBQDQRie2dnR2j5xcpSEIl2g5P0fEAScgptIkZK/tGTvJ63k4/H+S99+uutdn9s/+OnxzsTjFbh/z4/E1qGnrQRNp1NMdpiyBIwru0QJ1LzUWZYJsn1Z0v5pv+0InCGlBZGSJVtB2xLICXVbIhGrJdkGOM63EfmZaGB35ekn4gl/dshWMYKt8tTGZTQugVoqoqjTuWruFgVqF5eYXjISGYHfYyi01Oo5elSrw+wKr22mchdJtf46J5W9amS1GOTabyRGG7kRR8R8I/afiCtuiDQJWrRJFhJikoRoJmUQZopIFE1a+D0CeL/9/gxMkWkCpIyPMUiLFLezm4kg4zNR34imhf/+e2mnjnXcBmIggJLDIUiuJUiAL0U6//9XxvJhm/hgR7lUAR9WJFUsMYWgL7geVW2+m/u9mKio3G00mT4nlTc4935St2O/zqulKpPPjd+K6CcjToELF0Qm99TIwpXcgGsBtV+Ex29uT6nlRoRljSp5SVHpFdjv1TdcsyBWIyPtPpuM+7wktlypQC2o8jMRL4WFHEAVsvYU4iliyp9QgqQdBUI1buZBmoXT40MFBjWhw83oCy3kNbMAaUHQxMJhwiCUFnSKWsDdlUbhwPaT9DMRjxTmg1QL0sdXESGtvfP03elsf8n422X97kbqv4xoSbeRJeph+OGKMAWwD2QVGJX8qIIABbi8h52OkZBdUwFxQAdRQK1Ixrqn7cgPjxWIcxFXA1wrzIH1ETFBnow42YqBhdtNiVEGK6h7BBcvcEtEEqDpBXBA3lLbV1wIk90QWBVpEmR5RXqsyQ3HcBsgMfxsRMKu0M2jHhGxJc9GnExE57mXo81xnkeb/S31ueRR5/N8HuVkxHleRmyttdZaa6211lprrbXWWmuttdZaa6211lprrf2/fgGOlz1ojsCkRgAAAABJRU5ErkJggg==',
    manager: Manager,
    editor: Editor,
    render: Render,
    defaults: {
        features: [{
            id: '1',
            icon: 'fas fa-rocket',
            title: 'INITIAL WORK',
            description: 'Proin euismod sem ut diam ultricies, ut faucibus velit ultricies. Nam eu turpis quam. Duis ac condimentum eros.',
        },{
            id: '2',
            icon: 'fas fa-globe-europe',
            title: 'MASTER PLANNING',
            description: 'Proin euismod sem ut diam ultricies, ut faucibus velit ultricies. Nam eu turpis quam. Duis ac condimentum eros.',
        },{
            id: '3',
            icon: 'fas fa-rocket',
            title: 'SMOOTH EXECUTION',
            description: 'Proin euismod sem ut diam ultricies, ut faucibus velit ultricies. Nam eu turpis quam. Duis ac condimentum eros.',
        }]
    }
};
