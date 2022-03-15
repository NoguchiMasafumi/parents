const params = new URLSearchParams(window.location.search);
var str_school=params.get("school");
var str_year=params.get("year");
var str_season=params.get("season");
var str_weak=params.get("weak");
if (str_school=="" && str_year==""){str_year=3}


var value = new Vue({
    el: '#app',
    data: {
        answers: [],
        shuffle_items: [],
        filtered_items: [],
        shuffled:0,
        turnIndex: 0,
        questionCnt: 0,
        questions: [
            {
                school:'Elementary',
                year:'1',
                season:'',
                letter:'一',
                figure:'1',
                part:'一',
                weak:'',
                etc2:'',
                e1read:'イチ',e1sample:'一度、一座、第一',e2read:'イツ',e2sample:'一般、同一、統一',e3read:'ひと',e3sample:'一息、一筋、一月目',e4read:'ひと-つ',e4sample:'一つ',e5read:'',e5sample:'',e6read:'',e6sample:'',e7read:'',e7sample:'',e8read:'',e8sample:'',e9read:'',e9sample:'',e10read:'',e10sample:'',e11read:'',e11sample:'',
                j1read:'',j1sample:'',j2read:'',j2sample:'',j3read:'',j3sample:'',j4read:'',j4sample:'',j5read:'',j5sample:'',j6read:'',j6sample:'',j7read:'',j7sample:'',j8read:'',j8sample:'',j9read:'',j9sample:'',j10read:'',j10sample:'',j11read:'',j11sample:'',
                h1read:'',h1sample:'',h2read:'',h2sample:'',h3read:'',h3sample:'',h4read:'',h4sample:'',h5read:'',h5sample:'',h6read:'',h6sample:'',h7read:'',h7sample:'',h8read:'',h8sample:'',h9read:'',h9sample:'',h10read:'',h10sample:'',h11read:'',h11sample:''
            },
            {
                school:'Elementary',
                year:'1',
                season:'',
                letter:'右',
                figure:'5',
                part:'口',
                weak:'',
                etc2:'',
                e1read:'ウ',e1sample:'右岸、右折、右派',e2read:'ユウ',e2sample:'左右、座右',e3read:'みぎ',e3sample:'右、右手',e4read:'',e4sample:'',e5read:'',e5sample:'',e6read:'',e6sample:'',e7read:'',e7sample:'',e8read:'',e8sample:'',e9read:'',e9sample:'',e10read:'',e10sample:'',e11read:'',e11sample:'',
                j1read:'',j1sample:'',j2read:'',j2sample:'',j3read:'',j3sample:'',j4read:'',j4sample:'',j5read:'',j5sample:'',j6read:'',j6sample:'',j7read:'',j7sample:'',j8read:'',j8sample:'',j9read:'',j9sample:'',j10read:'',j10sample:'',j11read:'',j11sample:'',
                h1read:'',h1sample:'',h2read:'',h2sample:'',h3read:'',h3sample:'',h4read:'',h4sample:'',h5read:'',h5sample:'',h6read:'',h6sample:'',h7read:'',h7sample:'',h8read:'',h8sample:'',h9read:'',h9sample:'',h10read:'',h10sample:'',h11read:'',h11sample:''
            },
            {
                school:'Elementary',
                year:'1',
                season:'',
                letter:'雨',
                figure:'8',
                part:'雨',
                weak:'',
                etc2:'',
                e1read:'ウ',e1sample:'雨量、降雨、梅雨',e2read:'あめ',e2sample:'雨、大雨',e3read:'あま',e3sample:'雨雲、雨戸、雨具',e4read:'',e4sample:'',e5read:'',e5sample:'',e6read:'',e6sample:'',e7read:'',e7sample:'',e8read:'',e8sample:'',e9read:'',e9sample:'',e10read:'',e10sample:'',e11read:'',e11sample:'',
                j1read:'',j1sample:'',j2read:'',j2sample:'',j3read:'',j3sample:'',j4read:'',j4sample:'',j5read:'',j5sample:'',j6read:'',j6sample:'',j7read:'',j7sample:'',j8read:'',j8sample:'',j9read:'',j9sample:'',j10read:'',j10sample:'',j11read:'',j11sample:'',
                h1read:'',h1sample:'',h2read:'',h2sample:'',h3read:'',h3sample:'',h4read:'',h4sample:'',h5read:'',h5sample:'',h6read:'',h6sample:'',h7read:'',h7sample:'',h8read:'',h8sample:'',h9read:'',h9sample:'',h10read:'',h10sample:'',h11read:'',h11sample:''
            }

        ]
    },
    methods: {
        addAnswer: function(index) {
            this.answers.push(index);
            if(!this.completed) {
                /*console.log(this.questions[this.turnIndex].year)*/
                this.turnIndex++;
            }
        },
        reduceAnswer: function(index) {
            this.answers.pop(index);
            this.turnIndex--;
        },
        shuffle: function(array) {
            for (let i = array.length - 1; i > 0; i--) {
                let r = Math.floor(Math.random() * (i + 1))
                let tmp = array[i]
                array[i] = array[r]
                array[r] = tmp
            }


            
            for (let i = array.length - 1; i > 0; i--) {
                
                int_go=0;
                if(array[i].school==str_school){
                    int_go=1;
                }
                if(array[i].year==str_year){
                    int_go=1;
                }

                if(str_weak==1){
                    if(array[i].weak==str_weak){
                        int_go=1;
                    }
                }
                if(int_go==1){
                    console.log("1です")
                    filtered_items.push(array[i])
                }
            }

            /*array.splice(12,array.length)*/
            return filtered_items
        }


    },
    computed: {
        currentTurn: function() {
            if(this.shuffled==0){
                this.shuffle_items = this.shuffle(this.questions)
                this.shuffled=1
            }
            return this.questions[this.turnIndex];
        },
        completed: function() {
            return (this.questions.length == this.answers.length);
        }
    }
})






















document.addEventListener('DOMContentLoaded', function(){
	function jud_oClick(){
        document.getElementById(this.id.replace("jud_o","letter")).classList.add("chkd");
        document.getElementById(this.id.replace("jud_o","letter")).classList.remove("caution1");
	}
	const jud_o = document.getElementsByClassName('jud_o');
	for(let i = 0; i < jud_o.length; i++) {
    	jud_o[i].addEventListener('click', jud_oClick, false);
	}
}, false);


document.addEventListener('DOMContentLoaded', function(){
	function jud_xClick(){
        document.getElementById(this.id.replace("jud_x","letter")).classList.add("caution1");
        document.getElementById(this.id.replace("jud_x","letter")).classList.remove("chkd");
	}
	const jud_x = document.getElementsByClassName('jud_x');
	for(let i = 0; i < jud_x.length; i++) {
    	jud_x[i].addEventListener('click', jud_xClick, false);
	}
}, false);

document.addEventListener('DOMContentLoaded', function(){
	function jud_cxlClick(){
        document.getElementById(this.id.replace("jud_cxl","letter")).classList.remove("caution1");
        document.getElementById(this.id.replace("jud_cxl","letter")).classList.remove("chkd");
	}
	const jud_cxl = document.getElementsByClassName('jud_cxl');
	for(let i = 0; i < jud_cxl.length; i++) {
    	jud_cxl[i].addEventListener('click', jud_cxlClick, false);
	}
}, false);









