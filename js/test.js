var value = new Vue({


    el: '#app',
    data: {
        url_prop:'',
        questions: [
            {
                school:'Elementary',
                year:'1',
                semester:'',
                letter:'ss',
                figure:'1'
            },
            {
                school:'Elementary',
                year:'1',
                semester:'',
                letter:'dd',
                figure:'5'
            }
        ]
    },
    methods:{

    },
    computed: {
        currentTurn: function() {

            import test4_data from 'js/test4'

            export default {
              data(){
                return{
                  test2_questions: test4_data
                }
              }
            }
            



            //return test2_questions
        }
    }
})