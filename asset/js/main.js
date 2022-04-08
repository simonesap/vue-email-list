// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati. (modificato) 

var app = new Vue(
    {
        el: '#root',
        data: {
            mailRandom: '',
            counter: 10,
            mails: [],
            
        },

        created(){

            for(i = 0; i < 10; i++) {
                console.log(this.getMails());
            }
            
        
        },

        
        methods: {
            
            // Funzione con API all'interno che richiamo nel for nel created
            getMails: function() {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    this.mailRandom = response.data.response;
                    console.log(response.data.response);
                    this.mails.push(response.data.response)
                        },
                    )
            },
            
            // lookIndex: function(indexClick){
            //     console.log(indexClick);
            //     this.counter = indexClick;
            //     console.log(`index${this.counter}`);
            // },

        },
})
