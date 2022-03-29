var value = new Vue({
    el: '#app',
    data:{
        vv:'s110',
        ss:'s120',
        qq:[
            {
                pp:1
            },
            {
                pp:2
            }
        ]
    },
    methods:{
        tool1:function(){
            console.log("pp")
        }            
    },
    computed: {
        currentTurn: function() {


            this.qq[0].pp="ssss1"


            this.tool1()
            if(this.vv!="0"){
                alert("ss")
                //return this.ss
                //return this.qq
                console.log(",m")
                //break;
            }

            //console.log(this.year_group.length)
            //console.log(this.filtered_items.length)


            //console.log(outside.VALUE)
            //console.log("MM")
            
            //this.vv=outside.VALUE
            this.vv="xxx";
            
            //return this.qq;
        },
        completed: function() {
            return (this.vv==this.ss);

        }
    }
})
