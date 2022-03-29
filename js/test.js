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
        ans: function(){
        }


    },
    computed: {
        currentTurn: function() {
            

            import test4_data from './test4'
            export default{
                pp=test4_data[0].year
            }
            console.log(pp)

            //return test2_questions
        }
    }
})