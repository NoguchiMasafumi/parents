var value = new Vue({
    el: '#app',
    data:{
        ___________________________________________:'',
        url_focus:new URLSearchParams(window.location.search).get('focus'),
        url_school:new URLSearchParams(window.location.search).get('school'),
        url_year:new URLSearchParams(window.location.search).get('year'),
        url_semester:new URLSearchParams(window.location.search).get('semester'),
        url_status:new URLSearchParams(window.location.search).get('status'),
        url_digit:new URLSearchParams(window.location.search).get('digit'),
        url_view_mode:new URLSearchParams(window.location.search).get('view_mode'),
        ___________________________________________:'',
        import_file:'',
        exec1:0,
        turn:0,
        ar_filtered_count:0,
        ar_weak_count:0,
        status_info:'',
        weak_binary_from_status:'',
        url_prop:'',
        part_item_name:'',
        create_url:'',
        current_url:'',
        ___________________________________________:'',
        single_school:'',
        single_year:'',
        single_semester:'',
        single_letter:'',
        single_figure:'',
        single_part:'',
        single_weak:'',
        single_letter_disp:'',
        single_e1read:'',
        single_e1sample:'',
        single_e2read:'',
        single_e2sample:'',
        single_e3read:'',
        single_e3sample:'',
        single_e4read:'',
        single_e4sample:'',
        single_e5read:'',
        single_e5sample:'',
        single_e6read:'',
        single_e6sample:'',
        single_e7read:'',
        single_e7sample:'',
        single_e8read:'',
        single_e8sample:'',
        single_e9read:'',
        single_e9sample:'',
        single_e10read:'',
        single_e10sample:'',
        single_e11read:'',
        single_e11sample:'',
        single_j1read:'',
        single_j1sample:'',
        single_j2read:'',
        single_j2sample:'',
        single_j3read:'',
        single_j3sample:'',
        single_j4read:'',
        single_j4sample:'',
        single_j5read:'',
        single_j5sample:'',
        single_j6read:'',
        single_j6sample:'',
        single_j7read:'',
        single_j7sample:'',
        single_j8read:'',
        single_j8sample:'',
        single_j9read:'',
        single_j9sample:'',
        single_j10read:'',
        single_j10sample:'',
        single_j11read:'',
        single_j11sample:'',
        single_h1read:'',
        single_h1sample:'',
        single_h2read:'',
        single_h2sample:'',
        single_h3read:'',
        single_h3sample:'',
        single_h4read:'',
        single_h4sample:'',
        single_h5read:'',
        single_h5sample:'',
        single_h6read:'',
        single_h6sample:'',
        single_h7read:'',
        single_h7sample:'',
        single_h8read:'',
        single_h8sample:'',
        single_h9read:'',
        single_h9sample:'',
        single_h10read:'',
        single_h10sample:'',
        single_h11read:'',
        single_h11sample:'',
        questions:[],
        ar_year_group:[],
        ar_shuffle:[],
        ar_filtered:[],
        ar_weak:[],
        ar_part:[
            {part:'???',part_name:'??????'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'?????? ??????????????????'},
            {part:'??? ',part_name:'??????????????? ??????????????? ??????????????? ???????????????'},
            {part:'???',part_name:'?????? ???????????? ????????????'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'??? ????????? ????????? ?????????'},
            {part:'???',part_name:'?????? ?????????????????? ????????????'},
            {part:'???',part_name:'?????? ???????????? ?????????'},
            {part:'???',part_name:'??? ????????? ????????? ???????????????'},
            {part:'???',part_name:'????????????'},
            {part:'???',part_name:'?????? ??????????????? ????????????'},
            {part:'???',part_name:'?????? ???????????? ??????????????? ????????????'},
            {part:'???',part_name:'?????? ???????????? ????????????'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'?????? ??????????????????'},
            {part:'???',part_name:'?????? ???????????? ????????????'},
            {part:'???',part_name:'?????? ???????????????'},
            {part:'???',part_name:'??????'},
            {part:'???',part_name:'???'},
            {part:'???',part_name:'??? ?????????'},
            {part:'???',part_name:'?????? ??????????????? ?????????'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'???????????????'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'????????? ???????????????'},
            {part:'???',part_name:'??? ?????????'},
            {part:'???',part_name:'?????????'},
            {part:'???',part_name:'??????????????? ????????????'},
            {part:'???',part_name:'????????? ???????????????'},
            {part:'???',part_name:'????????? ???????????? ?????????????????? ???????????????'},
            {part:'???',part_name:'?????? ???????????? ??????????????? ????????????'},
            {part:'???',part_name:'?????? ???????????? ????????????'},
            {part:'???',part_name:'????????? ????????????'},
            {part:'???',part_name:'?????? ????????? ????????? ????????????'},
            {part:'???',part_name:'?????????????????????'},
            {part:'???',part_name:'?????? ????????? ???'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'??????????????? ?????? ???????????????'},
            {part:'???',part_name:'??????????????? ????????????'},
            {part:'???',part_name:'??? ?????? ????????? ????????????'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'?????? ?????????????????? ???????????????'},
            {part:'???',part_name:'??? ?????????'},
            {part:'???',part_name:'?????? ??????????????????'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'?????? ??????????????? ???????????? ?????????'},
            {part:'???',part_name:'?????? ??????????????? ??????'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'?????? ???????????????'},
            {part:'???',part_name:'?????? ??????????????? ???????????????'},
            {part:'???',part_name:'??? ????????? ?????????'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'?????????'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'??????'},
            {part:'???',part_name:'??????????????? ???????????????'},
            {part:'???',part_name:'?????? ???????????? ?????? ????????????'},
            {part:'???',part_name:'??????????????? ????????????'},
            {part:'???',part_name:'???????????????'},
            {part:'???',part_name:'????????? ?????????'},
            {part:'???',part_name:'?????? ???????????? ????????????'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'?????? ??????????????? ???????????????'},
            {part:'???',part_name:'??????'},
            {part:'???',part_name:'????????????'},
            {part:'???',part_name:'????????? ?????? ????????????'},
            {part:'???',part_name:'?????? ???????????? ???????????? ????????????'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'?????? ????????? ????????????'},
            {part:'???',part_name:'???????????????????????? ???????????? ?????????????????????'},
            {part:'???',part_name:'??????????????? ??????????????? ????????? ????????? ?????????'},
            {part:'???',part_name:'??????????????? ???????????? ???????????????'},
            {part:'???',part_name:'????????????'},
            {part:'???',part_name:'??? ??????????????? ????????? ???????????????'},
            {part:'???',part_name:'?????????????????????'},
            {part:'???',part_name:'?????????'},
            {part:'???',part_name:'?????????????????????????????????????????????'},
            {part:'???',part_name:'??????????????? ??????????????????'},
            {part:'???',part_name:'?????????'},
            {part:'???',part_name:'???'}, 
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'?????????????????????'},
            {part:'???',part_name:'??? ?????????'},
            {part:'???',part_name:'??? ?????????'},
            {part:'???',part_name:'????????? ?????????????????? ???????????????'},
            {part:'???',part_name:'??????'},
            {part:'???',part_name:'??? ????????????'},
            {part:'???',part_name:'????????? ??????????????? ?????????'},
            {part:'???',part_name:'??????'},
            {part:'???',part_name:'????????? ?????????'},
            {part:'???',part_name:'??????'},
            {part:'???',part_name:'????????? ???????????????'},
            {part:'???',part_name:'?????? ??????????????? ??????'},
            {part:'???',part_name:''},
            {part:'???',part_name:'???????????? ????????????????????????'},
            {part:'???',part_name:'????????? ????????????'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'????????? ????????????'},
            {part:'???',part_name:'????????? ???????????????'},
            {part:'???',part_name:'?????????'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'??? ????????? ????????? ?????????'},
            {part:'???',part_name:'??????????????? ??????????????? ?????????????????????'},
            {part:'???',part_name:'????????????????????????????????????????????????'},
            {part:'???',part_name:'?????? ??????????????????'},
            {part:'???',part_name:'??????????????? ??????????????? ??????????????? ???????????????'},
            {part:'???',part_name:'?????????????????????'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'??????????????????????????????'},
            {part:'???',part_name:'??????????????????????????????'},
            {part:'???',part_name:'??????'},
            {part:'???',part_name:'??????'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'????????? ?????? ???????????????'},
            {part:'???',part_name:'?????? ???????????? ????????????'},
            {part:'???',part_name:'??? ?????? ????????????'},
            {part:'???',part_name:'???'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'??????'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'??????????????????'},
            {part:'???',part_name:'??????  ????????????????????????????????????'},
            {part:'???',part_name:'????????? ???????????????'},
            {part:'???',part_name:'???????????? ???????????????????????? ????????? ???????????????'},
            {part:'???',part_name:'???'},
            {part:'???',part_name:'???'},
            {part:'???',part_name:'????????? ??????????????? ?????????'},
            {part:'???',part_name:'??????'},
            {part:'???',part_name:'?????? ???????????? ??????????????? ??????????????? ???????????????'},
            {part:'???',part_name:'???????????????'},
            {part:'???',part_name:'???????????? ?????? ??????'},
            {part:'???',part_name:'?????? ???????????????'},
            {part:'???',part_name:'??????????????? ??????????????????'},
            {part:'???',part_name:'???????????? ?????????????????? ??????????????? ??????'},
            {part:'???',part_name:'????????????'},
            {part:'???',part_name:'???????????????????????????????????????????????????'},
            {part:'???',part_name:'??? ???????????????'},
            {part:'???',part_name:'??? ?????????'},
            {part:'???',part_name:'????????? ???????????????'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'???????????????'},
            {part:'???',part_name:'???????????????'},
            {part:'???',part_name:'????????? ????????????'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'????????? ???????????????'},
            {part:'???',part_name:'???????????????'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'??????'},
            {part:'???',part_name:'??????????????? ??????????????? ?????????'},
            {part:'???',part_name:'?????????'},
            {part:'???',part_name:'????????????'},
            {part:'???',part_name:'??????????????? ??????????????? ???????????????'},
            {part:'???',part_name:'????????? ???'},
            {part:'???',part_name:'??????'},
            {part:'???',part_name:'?????? ?????????'},
            {part:'???',part_name:'??????'},
            {part:'???',part_name:'??????'},
            {part:'???',part_name:'?????? ??????????????? ??????????????? ????????? ????????????'},
            {part:'???',part_name:'???????????????'},
            {part:'???',part_name:'??????'},
            {part:'???',part_name:'???????????????????????????????????????????????????'},
            {part:'???',part_name:'??????????????????'},
            {part:'???',part_name:'??????????????????????????????????????????????????????'},
            {part:'???',part_name:'?????? ?????? ??????????????? ??????????????? ???????????? ????????????'},
            {part:'???',part_name:'????????? ?????? ???'},
            {part:'???',part_name:'?????????'},
            {part:'???',part_name:'????????? ?????????????????? ???????????????'},
            {part:'???',part_name:'????????? ?????????????????? ???????????????'},
            {part:'???',part_name:'???????????? ????????????'},
            {part:'???',part_name:'??????'},
            {part:'???',part_name:'??????????????? ?????? ?????????'},
            {part:'???',part_name:'???????????? ??????????????? ???????????????'},
            {part:'???',part_name:'????????? ??????????????? ??????'},
            {part:'???',part_name:'??????'},
            {part:'???',part_name:'???????????????'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'??? ???????????? ????????????'},
            {part:'???',part_name:'????????? ???'},
            {part:'???',part_name:'????????? ???????????????'},
            {part:'???',part_name:'????????? ???????????? ??????????????????'},
            {part:'???',part_name:'???????????? ???????????????'},
            {part:'???',part_name:'?????????'},
            {part:'???',part_name:'???????????????????????????'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'????????? ???????????????'},
            {part:'???',part_name:'????????????????????? ???????????? ??????????????? ??????'},
            {part:'???',part_name:'????????? ???????????? ????????????????????? ?????????????????? ???????????????'},
            {part:'???',part_name:'?????? ????????????'},
            {part:'???',part_name:'???????????????????????????????????????'},
            {part:'???',part_name:'?????? ???????????????'}
        ]

    },
    methods:{
        //****************** control array combination  ******************* */
        create_year_group: function(array){
            //console.log(this.url_year)
            //console.log(array.length)
            //console.log (this.url_year===null)
            for (let i = array.length - 1; i > -1; i--) {
                //console.log (this.url_year) 
                if(this.url_year.length==0){
                    //console.log("null???")
                    this.ar_year_group.push(array[i])
                }else{
                    if(array[i].year==this.url_year){
                        //console.log("????????????")
                        this.ar_year_group.push(array[i])
                    }
                }
            }

            console.log(this.ar_year_group.length)

        },
        //****** */
        shuffle: function(array) {
            for (let i = array.length - 1; i > 0; i--) {
                let r = Math.floor(Math.random() * (i + 1))
                let tmp = array[i]
                array[i] = array[r]
                array[r] = tmp
            }
        },
        //****** */
        filtering: function(array) {
            //console.log("dddd")
            //console.log(array.length)

            for (let i = array.length - 1; i > -1; i--) {
                let int_doit1=0
                if(array[i].school==this.url_school){
                    int_doit1=1
                }

                if(this.url_year===null){
                    //console.log(array[i].year)
                    int_doit1=1
                }else{
                    if(int_doit1==1 && this.url_year!=""){
                        if(array[i].year==this.url_year){
                            int_doit1=1
                        }else{
                            int_doit1=0
                        }
                    }
                }

                if(int_doit1==1 && (this.url_semester!="" && this.url_semester!=null)){
                    if(array[i].semester==this.url_semester){
                        int_doit1=1
                    }else{
                        int_doit1=0
                    }
                }
                if(int_doit1==1){
                    this.ar_filtered.push(array[i])
                }

            }
        },



        //****************** status code controls ********************* */
        //********* */
        create_status_code: function(){
            let str_binary=""
            for (let int_loop1 = this.ar_year_group.length - 1 ; int_loop1 >-1 ; int_loop1--) {
                let int_weak=0
                let int_exist1=0
                if(this.url_view_mode==0 || this.url_view_mode==2 || this.url_view_mode==4){
                    for (let int_loop2 = 0; int_loop2 < this.ar_filtered.length; int_loop2++) {
                        if(this.ar_year_group[int_loop1].letter == this.ar_filtered[int_loop2].letter){
                            if(this.ar_filtered[int_loop2].weak==1){
                                int_weak=1
                                int_exist1=1
                                break
                            }
                        }
                    }
                }else if(this.url_view_mode==1 || this.url_view_mode==3 || this.url_view_mode==5){
                    for (let int_loop2 = 0; int_loop2 < this.ar_weak.length; int_loop2++) {
                        if(this.ar_year_group[int_loop1].letter == this.ar_weak[int_loop2].letter){
                            if(this.ar_weak[int_loop2].weak==1){
                                int_weak=1
                                int_exist1=1
                                break
                            }
                        }
                    }
                }
                str_binary=str_binary+int_weak
            }
            var num = new Num();
            let str_decimal=""
            for (var i = 0, loop = str_binary.length; i < loop; i++) {
                var digit = str_binary.charAt(i);
                var x;
                if ("0" <= digit && digit <= '9') {
                    x = digit.charCodeAt(0) - "0".charCodeAt(0);
                } else if ("a" <= digit && digit <= 'f') {
                    x = digit.charCodeAt(0) - "a".charCodeAt(0) + 10;
                } else {
                    x = digit.charCodeAt(0) - "A".charCodeAt(0) + 10;
                }
                num = num.multiply(2).add(x);
            }
            for(let int_loop1=0;int_loop1 < num.value.length;int_loop1++){
                str_decimal=str_decimal+num.value[int_loop1]
            }
            this.current_url=location.protocol
            this.current_url=this.current_url+'//'
            this.current_url=this.current_url+location.hostname
            this.current_url=this.current_url+location.pathname
            this.current_url=this.current_url+'?focus='+this.url_focus
            this.current_url=this.current_url+'&school='+this.url_school
            this.current_url=this.current_url+'&year='+this.url_year
            this.current_url=this.current_url+'&semester='+this.url_semester
            this.current_url=this.current_url+'&status='+str_decimal
            this.current_url=this.current_url+'&digit='+this.ar_year_group.length
            this.current_url=this.current_url+'&view_mode='+this.url_view_mode
        },



        //********* */
        dec_to_bin: function(value){




            let num = new Num(value);
            var num2=num
            var byte;
            var over = new Num(256).power(byte);
            if (byte != 0) {
                var max;
                var min;
                var over = new Num(256).power(byte);
                var plusMax = over.divide(2).subtract(1);
                max = plusMax;
                min = over.divide(2).negate();
                if (num.compareTo(Num.ZERO) == -1) {
                    num2 = over.add(num);
                }
            }
            var result = '';
            while (true) {
                var ans = num2.divideAndRemainder(2);
                num2 = ans[0];
                var digit = Math.abs(ans[1].toNumber());
                var x;
                if (digit < 10) {
                    x = digit;
                } else {
                    x = String.fromCharCode(digit + "A".charCodeAt(0) - 10);
                }
                result = x + result;
                if (num2.equals(Num.ZERO)) {
                    break;
                }
            }
            let str_zero_digit=""
            let int_loop1=0
            for(int_loop1=0;int_loop1 < parseInt(this.url_digit);int_loop1++){
                str_zero_digit=str_zero_digit+0
            }
            var str_pre_binary=str_zero_digit+result
            this.weak_binary_from_status = str_pre_binary.slice(-this.url_digit)
        },




        //****************** user control  ******************* */
        //****** */
        cue_forward: function(index) {
            this.turn++;
            if(this.ar_filtered.length!=this.turn){
                //this.rest_clss()
            }
        },
        //****** */
        review_rewind: function(index) {
            this.turn--;
        },
        //****** */
        back_to_first: function(){
            this.turn=0;
            this.create_url=''
        },
        //****** */
        rew1:function(){
            this.turn--
        },
        //****** */
        visibility_toggle: function(mode,index){
            if(mode=='filtered'){
                console.log(this.ar_filtered[index].letter_disp)

                if(this.ar_filtered[index].letter_disp.length==0 || this.ar_filtered[index].letter_disp=='' || this.ar_filtered[index].letter_disp=='undefined'){
                    this.ar_filtered[index].letter_disp=1
                }else{
                    this.ar_filtered[index].letter_disp=''
                }
            }else if(mode=='weak'){
                if(this.ar_weak[index].letter_disp=='' || this.ar_weak[index].letter_disp==null){
                    this.ar_weak[index].letter_disp=1
                }else{
                    this.ar_weak[index].letter_disp=''
                }
            }
        },
        change_focus:function(val){
            change_focus.open=false
            this.turn=0
            this.url_focus=val
            this.create_url=''
            this.exec1==0
            this.ar_filtered=[]
            this.ar_weak=[]
            this.ar_year_group=[]
            this.ar_shuffle=[]
            window.location.href = 'index.htm?focus='+val+'&view_mode='+this.url_view_mode
    
            this.first_set()

        },
        change_view_mode:function(index){
            change_view_mode.open=false
            this.turn=0
            this.url_view_mode=index
            this.create_url=''
        },
        change_disp:function(school,year){
            year1.open=false

            if(school!=""){this.url_school=school;}
            if(this.url_school=='Elementary'){
                if(year!=""){this.url_year=year;}
            }else{
                this.url_year=""
            }
            this.turn=0
            this.url_view_mode=2
            window.location.href = 'index.htm?focus='+this.url_focus+'&school='+this.url_school+'&year='+this.url_year+'&view_mode='+this.url_view_mode
        },
        change_semester:function(semester){
            semester1.open=false
            if(semester!=""){
                this.url_semester=semester
            }else{
                this.url_semester=""
            }
            window.location.href = 'index.htm?focus='+this.url_focus+'&school='+this.url_school+'&year='+this.url_year+'&semester='+this.url_semester+'&view_mode='+this.url_view_mode


            //this.ar_year_group.splice(0)
            //this.ar_filtered.splice(0)
            //this.ar_shuffle.splice(0)
            //this.ar_weak.splice(0)
            //this.turn=0

            //this.currentTurn()


            //this.view_control()
        },
        create_status_now: function(){


            this.create_status_code()
            this.create_url=1;
            
            
            
            
            
            
            
            if(this.url_view_mode==0 || this.url_view_mode==2 || this.url_view_mode==4){
                this.turn=this.ar_filtered.length
            }else{
                this.turn=this.ar_weak.length
            }




        },
        jud_o: function(array,index){
            let arc1=''
            let arc2=''
            if(this.url_view_mode==0){
                this.ar_filtered[this.turn].weak="9"
                arc1=this.ar_filtered
                arc2=this.ar_weak
            }else{
                this.ar_weak[this.turn].weak="9"
                arc1=this.ar_weak
                arc2=this.ar_filtered
            }
            int_chk1=0
            for(int_loop1=0;int_loop1<arc2.length;int_loop1++){
                if(arc2[int_loop1].letter==arc1[this.turn].letter){
                    int_chk1=1
                    arc2[int_loop1].weak="9"
                    break;
                }
            }
        },
        jud_x: function(index){
            let arc1=''
            let arc2=''

            if(this.url_view_mode==0){
                this.ar_filtered[this.turn].weak="1"
                arc1=this.ar_filtered
                arc2=this.ar_weak
            }else{
                this.ar_weak[this.turn].weak="9"
                arc1=this.ar_weak
                arc2=this.ar_filtered
            }
            let int_chk1=0
            let int_loop1=0
            for(int_loop1=0;int_loop1<arc2.length;int_loop1++){
                if(arc2[int_loop1].letter==arc1[this.turn].letter){
                    int_chk1=1
                    arc2[int_loop1].weak="1"
                    break;
                }
            }


            //?????????=int_chk1???caution1=x=???????????????arc2??????letter?????????????????????????????????????????????????????????????????????
            if(int_chk1==0){
                arc2.push(arc1[this.turn])
                if(this.url_view_mode==0){
                    this.ar_weak_count++
                }

            }



        },
        jud_cxl: function(index){
            let arc1=''
            let arc2=''
            if(this.url_view_mode==0){
                this.ar_filtered[this.turn].weak=""
                arc1=this.ar_filtered
                arc2=this.ar_weak

            }else{
                this.ar_weak[this.turn].weak=""
                arc1=this.ar_weak
                arc2=this.ar_filtered

            }
            int_chk1=0
            for(int_loop1=0;int_loop1<arc2.length;int_loop1++){
                if(arc2[int_loop1].letter==arc1[this.turn].letter){
                    int_chk1=1
                    arc2[int_loop1].weak=""
                    break;
                }
            }




        },
        rtn_toggle: function(index){
            let arc1=''
            let arc2=''

            if(this.url_view_mode==0 || this.url_view_mode==2){
                arc1=this.ar_filtered
                arc2=this.ar_weak
            }else{
                arc1=this.ar_weak
                arc2=this.ar_filtered
            }

            //*************** ????????? ************** */
            var str_decide1='';
            //console.log(this.url_view_mode)
            if(this.url_view_mode==0 || this.url_view_mode==2){
                if(arc1[index].weak=='' || arc1[index].weak=='0'){
                    arc1[index].weak='9'
                    str_decide1='9'
                }else if(arc1[index].weak=='9'){
                    arc1[index].weak='1'
                    str_decide1='1'
                }else{
                    arc1[index].weak=''
                }
            //*************** ????????? ************** */
            }else{
                if(arc1[index].weak=='' || arc1[index].weak=='0'){
                    arc1[index].weak='1'
                    str_decide1='1'
                }else if(arc1[index].weak=='1'){
                    arc1[index].weak='9'
                    str_decide1='9'
                }else{
                    arc1[index].weak=''
                }
            }
            let int_chk1=0
            let int_loop1=0
            for(int_loop1=0;int_loop1<arc2.length;int_loop1++){
                if(arc2[int_loop1].letter==arc1[index].letter){
                    int_chk1=1
                    arc2[int_loop1].weak=str_decide1
                    break;
                }
            }
            //?????????=int_chk1???caution1=x=???????????????arc2??????letter?????????????????????????????????????????????????????????????????????
            //console.log(int_chk1)
            if(int_chk1==0 && str_decide1==1){
                arc2.push(arc1[index])
                //if(this.url_view_mode==0){
                    this.weak_cnt++
                //}
            }
        },
        sample_toggle: function(index){
            let arc1=''
            let arc2=''

            if(this.url_view_mode==4){
                arc1=this.ar_filtered
                arc2=this.ar_weak
            }else{
                arc1=this.ar_weak
                arc2=this.ar_filtered
            }

            //*************** ????????? ************** */
            var str_decide1='';
            if(this.url_view_mode==4){
                if(arc1[index].weak=='' || arc1[index].weak=='0'){
                    arc1[index].weak='9'
                    str_decide1='9'
                }else if(arc1[index].weak=='9'){
                    arc1[index].weak='1'
                    str_decide1='1'
                }else{
                    arc1[index].weak=''
                }
            //*************** ????????? ************** */
            }else{
                if(arc1[index].weak=='' || arc1[index].weak=='0'){
                    arc1[index].weak='1'
                    str_decide1='1'
                }else if(arc1[index].weak=='1'){
                    arc1[index].weak='9'
                    str_decide1='9'
                }else{
                    arc1[index].weak=''
                }
            }
            let int_chk1=0
            //console.log(arc2.length)
            let int_loop1=0
            for(int_loop1=0;int_loop1<arc2.length;int_loop1++){
                
                //console.log(arc2[int_loop1].letter +" " +arc1[index].letter)
                if(arc2[int_loop1].letter==arc1[index].letter){

                    int_chk1=1
                    arc2[int_loop1].weak=str_decide1
                    break;
                }
            }
            //?????????=int_chk1???caution1=x=???????????????arc2??????letter?????????????????????????????????????????????????????????????????????
            if(int_chk1==0 && str_decide1==1){
                arc2.push(arc1[index])
                //if(this.url_view_mode==0){
                this.weak_cnt++
                //}
            }



        },
        view_toggle: function(){
            if(this.url_view_mode==0){
                this.url_view_mode=1
            }else if(this.url_view_mode==1){
                this.url_view_mode=2
            }else if(this.url_view_mode==2){
                this.url_view_mode=3
            }else if(this.url_view_mode==3){
                this.url_view_mode=4
            }else if(this.url_view_mode==4){
                this.url_view_mode=5
            }else if(this.url_view_mode==5){
                this.url_view_mode=0
            }
            this.turnIndex=0
        },

        first_set:function(){

            let int_loop1=0







            if(this.url_focus=="english_words"){
                this.import_file="./english_words_20220330.js"
            }else if(this.url_focus=="kanji"){
                this.import_file="./kanji_20220413.js"
            }else if(this.url_focus=="national_flag"){
                this.import_file="./national_flag_20220513.js"
            }else if(this.url_focus=="automobile_manufacturers"){
                this.import_file="./automobile_manufacturers_20220517.js"
            }else{
                this.import_file="./kanji_20220413.js"
            }




            import(this.import_file)
            .then(module => {
                this.rr = module.default
                this.questions=module.default.questions


                //******************** ar_year_group

                this.create_year_group(this.questions)

                //console.log(this.ar_year_group.length)

                //*********** put weak to ar_year_gropu ********** */
                //console.log(this.url_status)
                if(this.url_status!=null && this.url_status.length!=0){
                    this.dec_to_bin(this.url_status)
                    let int_loop1_rev=0
                    for(int_loop1=this.ar_year_group.length-1;int_loop1>-1;int_loop1--){
                        this.ar_year_group[int_loop1].weak=this.weak_binary_from_status[int_loop1_rev]
                        int_loop1_rev=int_loop1_rev+1
                    }
                }else{
                    this.status_info="??????URL???????????????????????????????????????????????????????????????????????????1?????????????????????????????????????????????????????????URL????????????????????????";
                }


                //******************** ar_shuffle
                //** 1st array copy. if use = then changing reflect to original */
                for(int_loop1=this.ar_year_group.length-1;int_loop1>-1;int_loop1--){
                    this.ar_shuffle.push(this.ar_year_group[int_loop1])
                }
                this.shuffle(this.ar_shuffle)




                //******************** ar_filter
                this.filtering(this.ar_shuffle)
                let ar_spl1=""
                for(int_loop1=0;int_loop1<this.ar_filtered.length;int_loop1++){
                    ar_spl1=this.ar_filtered[int_loop1].e1read.split("-")
                    this.ar_filtered[int_loop1].e1sample=this.ar_filtered[int_loop1].e1sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].e2read.split("-")
                    this.ar_filtered[int_loop1].e2sample=this.ar_filtered[int_loop1].e2sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].e3read.split("-")
                    this.ar_filtered[int_loop1].e3sample=this.ar_filtered[int_loop1].e3sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].e4read.split("-")
                    this.ar_filtered[int_loop1].e4sample=this.ar_filtered[int_loop1].e4sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].e5read.split("-")
                    this.ar_filtered[int_loop1].e5sample=this.ar_filtered[int_loop1].e5sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].e6read.split("-")
                    this.ar_filtered[int_loop1].e6sample=this.ar_filtered[int_loop1].e6sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].e7read.split("-")
                    this.ar_filtered[int_loop1].e7sample=this.ar_filtered[int_loop1].e7sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].e8read.split("-")
                    this.ar_filtered[int_loop1].e8sample=this.ar_filtered[int_loop1].e8sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].e9read.split("-")
                    this.ar_filtered[int_loop1].e9sample=this.ar_filtered[int_loop1].e9sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].e10read.split("-")
                    this.ar_filtered[int_loop1].e10sample=this.ar_filtered[int_loop1].e10sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].e11read.split("-")
                    this.ar_filtered[int_loop1].e11sample=this.ar_filtered[int_loop1].e11sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].j1read.split("-")
                    this.ar_filtered[int_loop1].j1sample=this.ar_filtered[int_loop1].j1sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].j2read.split("-")
                    this.ar_filtered[int_loop1].j2sample=this.ar_filtered[int_loop1].j2sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].j3read.split("-")
                    this.ar_filtered[int_loop1].j3sample=this.ar_filtered[int_loop1].j3sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].j4read.split("-")
                    this.ar_filtered[int_loop1].j4sample=this.ar_filtered[int_loop1].j4sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].j5read.split("-")
                    this.ar_filtered[int_loop1].j5sample=this.ar_filtered[int_loop1].j5sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].j6read.split("-")
                    this.ar_filtered[int_loop1].j6sample=this.ar_filtered[int_loop1].j6sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].j7read.split("-")
                    this.ar_filtered[int_loop1].j7sample=this.ar_filtered[int_loop1].j7sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].j8read.split("-")
                    this.ar_filtered[int_loop1].j8sample=this.ar_filtered[int_loop1].j8sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].j9read.split("-")
                    this.ar_filtered[int_loop1].j9sample=this.ar_filtered[int_loop1].j9sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].j10read.split("-")
                    this.ar_filtered[int_loop1].j10sample=this.ar_filtered[int_loop1].j10sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].j11read.split("-")
                    this.ar_filtered[int_loop1].j11sample=this.ar_filtered[int_loop1].j11sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].h1read.split("-")
                    this.ar_filtered[int_loop1].h1sample=this.ar_filtered[int_loop1].h1sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].h2read.split("-")
                    this.ar_filtered[int_loop1].h2sample=this.ar_filtered[int_loop1].h2sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].h3read.split("-")
                    this.ar_filtered[int_loop1].h3sample=this.ar_filtered[int_loop1].h3sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].h4read.split("-")
                    this.ar_filtered[int_loop1].h4sample=this.ar_filtered[int_loop1].h4sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].h5read.split("-")
                    this.ar_filtered[int_loop1].h5sample=this.ar_filtered[int_loop1].h5sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].h6read.split("-")
                    this.ar_filtered[int_loop1].h6sample=this.ar_filtered[int_loop1].h6sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].h7read.split("-")
                    this.ar_filtered[int_loop1].h7sample=this.ar_filtered[int_loop1].h7sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].h8read.split("-")
                    this.ar_filtered[int_loop1].h8sample=this.ar_filtered[int_loop1].h8sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].h9read.split("-")
                    this.ar_filtered[int_loop1].h9sample=this.ar_filtered[int_loop1].h9sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].h10read.split("-")
                    this.ar_filtered[int_loop1].h10sample=this.ar_filtered[int_loop1].h10sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                    ar_spl1=this.ar_filtered[int_loop1].h11read.split("-")
                    this.ar_filtered[int_loop1].h11sample=this.ar_filtered[int_loop1].h11sample.replace(new RegExp(this.ar_filtered[int_loop1].letter,"g"),ar_spl1[0])
                }
                this.ar_filtered_count=this.ar_filtered.length


                //******************** ar_weak
                if(this.url_status!=null && this.url_status.length!=0){
                    for(int_loop1=0;int_loop1<this.ar_filtered.length;int_loop1++){
                        if(this.ar_filtered[int_loop1].weak==1){
                            this.ar_weak.push(this.ar_filtered[int_loop1])
                        }
                    }
                
                }
                this.ar_weak_count=this.ar_weak.length



    

                //**************************************** */
                let ar_path=location.pathname.split("/")
                let str_page_file=ar_path[ar_path.length-1]

                this.exec1=1

                //***** attention!!  after this point be return */
                this.view_control()

            });





        },



        //****************** display control ******************* */
        view_control:function(){

            console.log("ippo")


            let int_loop1=0


            if(this.url_view_mode==0){
                if(this.url_focus=='kanji'){
                    this.part_item_name=""
                    for(int_loop1=0;int_loop1<this.ar_part.length;int_loop1++){
                        if(this.ar_part[int_loop1].part==this.ar_filtered[this.turn].part){
                            this.part_item_name=this.ar_part[int_loop1].part_name
                            break;
                        }
                    }
                }
                console.log(this.part_item_name)
            }else if(this.url_view_mode==1){
                if(this.url_focus=='kanji'){
                    this.part_item_name=""
                    console.log("?????????")
                    for(int_loop1=0;int_loop1<this.ar_part.length;int_loop1++){
                        if(this.ar_part[int_loop1].part==this.ar_weak[this.turn].part){
                            this.part_item_name=this.ar_part[int_loop1].part_name
                            break;
                        }
                    }
                }
            }   



            if(this.url_view_mode==2){
                //****????????? */
                return this.questions
            }else if(this.url_view_mode==0){
                this.single_school=this.ar_filtered[this.turn].school
                this.single_year=this.ar_filtered[this.turn].year
                this.single_semester=this.ar_filtered[this.turn].semester
                this.single_letter=this.ar_filtered[this.turn].letter
                this.single_figure=this.ar_filtered[this.turn].figure
                this.single_part=this.ar_filtered[this.turn].part
                this.single_weak=this.ar_filtered[this.turn].weak
                this.single_letter_disp=this.ar_filtered[this.turn].letter_disp
                this.single_e1read=this.ar_filtered[this.turn].e1read
                this.single_e1sample=this.ar_filtered[this.turn].e1sample
                this.single_e2read=this.ar_filtered[this.turn].e2read
                this.single_e2sample=this.ar_filtered[this.turn].e2sample
                this.single_e3read=this.ar_filtered[this.turn].e3read
                this.single_e3sample=this.ar_filtered[this.turn].e3sample
                this.single_e4read=this.ar_filtered[this.turn].e4read
                this.single_e4sample=this.ar_filtered[this.turn].e4sample
                this.single_e5read=this.ar_filtered[this.turn].e5read
                this.single_e5sample=this.ar_filtered[this.turn].e5sample
                this.single_e6read=this.ar_filtered[this.turn].e6read
                this.single_e6sample=this.ar_filtered[this.turn].e6sample
                this.single_e7read=this.ar_filtered[this.turn].e7read
                this.single_e7sample=this.ar_filtered[this.turn].e7sample
                this.single_e8read=this.ar_filtered[this.turn].e8read
                this.single_e8sample=this.ar_filtered[this.turn].e8sample
                this.single_e9read=this.ar_filtered[this.turn].e9read
                this.single_e9sample=this.ar_filtered[this.turn].e9sample
                this.single_e10read=this.ar_filtered[this.turn].e10read
                this.single_e10sample=this.ar_filtered[this.turn].e10sample
                this.single_e11read=this.ar_filtered[this.turn].e11read
                this.single_e11sample=this.ar_filtered[this.turn].e11sample
                this.single_j1read=this.ar_filtered[this.turn].j1read
                this.single_j1sample=this.ar_filtered[this.turn].j1sample
                this.single_j2read=this.ar_filtered[this.turn].j2read
                this.single_j2sample=this.ar_filtered[this.turn].j2sample
                this.single_j3read=this.ar_filtered[this.turn].j3read
                this.single_j3sample=this.ar_filtered[this.turn].j3sample
                this.single_j4read=this.ar_filtered[this.turn].j4read
                this.single_j4sample=this.ar_filtered[this.turn].j4sample
                this.single_j5read=this.ar_filtered[this.turn].j5read
                this.single_j5sample=this.ar_filtered[this.turn].j5sample
                this.single_j6read=this.ar_filtered[this.turn].j6read
                this.single_j6sample=this.ar_filtered[this.turn].j6sample
                this.single_j7read=this.ar_filtered[this.turn].j7read
                this.single_j7sample=this.ar_filtered[this.turn].j7sample
                this.single_j8read=this.ar_filtered[this.turn].j8read
                this.single_j8sample=this.ar_filtered[this.turn].j8sample
                this.single_j9read=this.ar_filtered[this.turn].j9read
                this.single_j9sample=this.ar_filtered[this.turn].j9sample
                this.single_j10read=this.ar_filtered[this.turn].j10read
                this.single_j10sample=this.ar_filtered[this.turn].j10sample
                this.single_j11read=this.ar_filtered[this.turn].j11read
                this.single_j11sample=this.ar_filtered[this.turn].j11sample
                this.single_h1read=this.ar_filtered[this.turn].h1read
                this.single_h1sample=this.ar_filtered[this.turn].h1sample
                this.single_h2read=this.ar_filtered[this.turn].h2read
                this.single_h2sample=this.ar_filtered[this.turn].h2sample
                this.single_h3read=this.ar_filtered[this.turn].h3read
                this.single_h3sample=this.ar_filtered[this.turn].h3sample
                this.single_h4read=this.ar_filtered[this.turn].h4read
                this.single_h4sample=this.ar_filtered[this.turn].h4sample
                this.single_h5read=this.ar_filtered[this.turn].h5read
                this.single_h5sample=this.ar_filtered[this.turn].h5sample
                this.single_h6read=this.ar_filtered[this.turn].h6read
                this.single_h6sample=this.ar_filtered[this.turn].h6sample
                this.single_h7read=this.ar_filtered[this.turn].h7read
                this.single_h7sample=this.ar_filtered[this.turn].h7sample
                this.single_h8read=this.ar_filtered[this.turn].h8read
                this.single_h8sample=this.ar_filtered[this.turn].h8sample
                this.single_h9read=this.ar_filtered[this.turn].h9read
                this.single_h9sample=this.ar_filtered[this.turn].h9sample
                this.single_h10read=this.ar_filtered[this.turn].h10read
                this.single_h10sample=this.ar_filtered[this.turn].h10sample
                this.single_h11read=this.ar_filtered[this.turn].h11read
                this.single_h11sample=this.ar_filtered[this.turn].h11sample
            }else if(this.url_view_mode==1){
                this.single_school=this.ar_weak[this.turn].school
                this.single_year=this.ar_weak[this.turn].year
                this.single_semester=this.ar_weak[this.turn].semester
                this.single_letter=this.ar_weak[this.turn].letter
                this.single_figure=this.ar_weak[this.turn].figure
                this.single_part=this.ar_weak[this.turn].part
                this.single_weak=this.ar_weak[this.turn].weak
                this.single_letter_disp=this.ar_weak[this.turn].letter_disp
                this.single_e1read=this.ar_weak[this.turn].e1read
                this.single_e1sample=this.ar_weak[this.turn].e1sample
                this.single_e2read=this.ar_weak[this.turn].e2read
                this.single_e2sample=this.ar_weak[this.turn].e2sample
                this.single_e3read=this.ar_weak[this.turn].e3read
                this.single_e3sample=this.ar_weak[this.turn].e3sample
                this.single_e4read=this.ar_weak[this.turn].e4read
                this.single_e4sample=this.ar_weak[this.turn].e4sample
                this.single_e5read=this.ar_weak[this.turn].e5read
                this.single_e5sample=this.ar_weak[this.turn].e5sample
                this.single_e6read=this.ar_weak[this.turn].e6read
                this.single_e6sample=this.ar_weak[this.turn].e6sample
                this.single_e7read=this.ar_weak[this.turn].e7read
                this.single_e7sample=this.ar_weak[this.turn].e7sample
                this.single_e8read=this.ar_weak[this.turn].e8read
                this.single_e8sample=this.ar_weak[this.turn].e8sample
                this.single_e9read=this.ar_weak[this.turn].e9read
                this.single_e9sample=this.ar_weak[this.turn].e9sample
                this.single_e10read=this.ar_weak[this.turn].e10read
                this.single_e10sample=this.ar_weak[this.turn].e10sample
                this.single_e11read=this.ar_weak[this.turn].e11read
                this.single_e11sample=this.ar_weak[this.turn].e11sample
                this.single_j1read=this.ar_weak[this.turn].j1read
                this.single_j1sample=this.ar_weak[this.turn].j1sample
                this.single_j2read=this.ar_weak[this.turn].j2read
                this.single_j2sample=this.ar_weak[this.turn].j2sample
                this.single_j3read=this.ar_weak[this.turn].j3read
                this.single_j3sample=this.ar_weak[this.turn].j3sample
                this.single_j4read=this.ar_weak[this.turn].j4read
                this.single_j4sample=this.ar_weak[this.turn].j4sample
                this.single_j5read=this.ar_weak[this.turn].j5read
                this.single_j5sample=this.ar_weak[this.turn].j5sample
                this.single_j6read=this.ar_weak[this.turn].j6read
                this.single_j6sample=this.ar_weak[this.turn].j6sample
                this.single_j7read=this.ar_weak[this.turn].j7read
                this.single_j7sample=this.ar_weak[this.turn].j7sample
                this.single_j8read=this.ar_weak[this.turn].j8read
                this.single_j8sample=this.ar_weak[this.turn].j8sample
                this.single_j9read=this.ar_weak[this.turn].j9read
                this.single_j9sample=this.ar_weak[this.turn].j9sample
                this.single_j10read=this.ar_weak[this.turn].j10read
                this.single_j10sample=this.ar_weak[this.turn].j10sample
                this.single_j11read=this.ar_weak[this.turn].j11read
                this.single_j11sample=this.ar_weak[this.turn].j11sample
                this.single_h1read=this.ar_weak[this.turn].h1read
                this.single_h1sample=this.ar_weak[this.turn].h1sample
                this.single_h2read=this.ar_weak[this.turn].h2read
                this.single_h2sample=this.ar_weak[this.turn].h2sample
                this.single_h3read=this.ar_weak[this.turn].h3read
                this.single_h3sample=this.ar_weak[this.turn].h3sample
                this.single_h4read=this.ar_weak[this.turn].h4read
                this.single_h4sample=this.ar_weak[this.turn].h4sample
                this.single_h5read=this.ar_weak[this.turn].h5read
                this.single_h5sample=this.ar_weak[this.turn].h5sample
                this.single_h6read=this.ar_weak[this.turn].h6read
                this.single_h6sample=this.ar_weak[this.turn].h6sample
                this.single_h7read=this.ar_weak[this.turn].h7read
                this.single_h7sample=this.ar_weak[this.turn].h7sample
                this.single_h8read=this.ar_weak[this.turn].h8read
                this.single_h8sample=this.ar_weak[this.turn].h8sample
                this.single_h9read=this.ar_weak[this.turn].h9read
                this.single_h9sample=this.ar_weak[this.turn].h9sample
                this.single_h10read=this.ar_weak[this.turn].h10read
                this.single_h10sample=this.ar_weak[this.turn].h10sample
                this.single_h11read=this.ar_weak[this.turn].h11read
                this.single_h11sample=this.ar_weak[this.turn].h11sample
            }
        }
    },
    computed:{
        currentTurn(){

            //****************** assist url property ********************* */
            if ((this.url_school==null || this.url_school=="") && (this.url_year==null || this.url_year=="")){
                this.url_school='Elementary'
                if(this.url_focus=='kanji'){
                    this.url_year=3
                }else{
                    this.url_year=""
                }
            }
            if(this.url_semester=="undefined" || this.url_semester==null || this.url_semester==""){this.url_semester=""}
            if(this.url_status==null || this.url_status==""){this.url_status=""}
            if(this.url_digit==null || this.url_digit==""){this.url_digit=""}
            if(this.url_view_mode==null || this.url_view_mode==""){this.url_view_mode=0}



            if(this.url_view_mode=="" || this.url_view_mode==null){
                this.url_view_mode=this.url_view_mode
            }

            //************* set url property string *********** */
            if(this.url_school!=null){
                this.url_prop=this.url_school
            }
            if(this.url_year!=null){
                this.url_prop=this.url_prop + this.url_year
            }
            if(this.url_semester!=null && this.url_semester.length!=0){
                this.url_prop=this.url_prop + " Semester" + this.url_semester
            }


            //****************** control array combination  ******************* */

            if(this.exec1==0){


                this.first_set()
            }else{
                if((this.url_view_mode==0||this.url_view_mode==2||this.url_view_mode==4) && this.turn==this.ar_filtered_count||(this.url_view_mode==1||this.url_view_mode==3||this.url_view_mode==5) && this.turn==this.ar_weak_count){
                    console.log("fin")
                    this.create_status_code()
                    this.url_view_mode="finish"

                }else{

                    //**************************************** */
                    let ar_path=location.pathname.split("/")
                    let str_page_file=ar_path[ar_path.length-1]
                    if(this.urL_view_mode==0){
                        if(this.url_focus=='kanji'){
                            this.part_item_name=""
                            for(int_loop1=0;int_loop1<this.ar_part.length;int_loop1++){
                                if(this.ar_part[int_loop1].part==this.ar_filtered[this.turn].part){
                                    this.part_item_name=this.ar_part[int_loop1].part_name
                                    break;
                                }
                            }
                        }
                    }else if(this.url_view_mode==1){
                        if(this.url_focus=='kanji'){
                            this.part_item_name=""
                            console.log("?????????")
                            for(int_loop1=0;int_loop1<this.ar_part.length;int_loop1++){
                                if(this.ar_part[int_loop1].part==this.ar_weak[this.turn].part){
                                    this.part_item_name=this.ar_part[int_loop1].part_name
                                    break;
                                }
                            }
                        }
                    }   

                    this.view_control()
                }

            }

        }
    }
})
