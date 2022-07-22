const app = new Vue({
    el: '#App',
    data:{
        languageTitle:'SELECCIONE EL IDIOMA'
    },
})

const inicioApp = new Vue({
    el:'#inicioApp',
    data:{
        titulo:'FRONTEND',
        active: '',
        menuIcon: 'fa-bars',
    },
    methods:{
        Menu(){
            if(this.menuIcon == 'fa-bars'){
                this.menuIcon = 'fa-xmark'
                this.active = 'navActive'
            }else if(this.menuIcon == 'fa-xmark'){
                this.menuIcon = 'fa-bars'
                this.active = ''
            }
        },
    }
})

