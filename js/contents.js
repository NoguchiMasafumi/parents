
window.onbeforeunload = function(e) {
    e.returnValue = "再読込みをしようとしています。よろしいですか？";
}

//let ssp="./kanji_20220330.js"

//import outside1 from "./kanji_20220330.js"




var value = new Vue({
    el: '#app',
    data: {
        str_school:new URLSearchParams(window.location.search).get('school'),
        str_year:new URLSearchParams(window.location.search).get('year'),
        str_semester:new URLSearchParams(window.location.search).get('semester'),
        str_status:new URLSearchParams(window.location.search).get('status'),
        str_digit:new URLSearchParams(window.location.search).get('digit'),
        str_view_mode:new URLSearchParams(window.location.search).get('view_mode'),
        answers: [],
        shuffle_items: [],
        filtered_items: [],
        weak_items: [],
        year_group: [],
        filtered_cnt:0,
        weak_cnt:0,
        shuffled:0,
        turnIndex: 0,
        bef_Index: 0,
        current_url:'',
        weak_binary_from_status:'',
        questionCnt: 0,
        view_mode:'',
        url_prop:'',
        questions: [],
        v_cau:'',
        v_cau_all:'',
        create_url:'',
        part_items:[
            {part:'一',part_name:'イチ'},
            {part:'口',part_name:'くち くちへん'},
            {part:'雨',part_name:'あめ あめかんむり'},
            {part:'冂 ',part_name:'けいがまえ まきがまえ どうがまえ えんがまえ'},
            {part:'王',part_name:'たま たまへん おうへん'},
            {part:'音',part_name:'おと おとへん'},
            {part:'火',part_name:'ひ ひへん れっか れんが'},
            {part:'艹',part_name:'くさ くさかんむり そうこう'},
            {part:'貝',part_name:'かい かいへん こがい'},
            {part:'子',part_name:'こ こへん こども こどもへん'},
            {part:'气',part_name:'きがまえ'},
            {part:'乙',part_name:'オツ おつにょう つりばり'},
            {part:'亻',part_name:'ひと にんべん ひとがしら ひとやね'},
            {part:'玉',part_name:'たま たまへん おうへん'},
            {part:'金',part_name:'かね かねへん'},
            {part:'穴',part_name:'あな あなかんむり'},
            {part:'月',part_name:'つき つきへん ふなづき'},
            {part:'犬',part_name:'いぬ けものへん'},
            {part:'見',part_name:'みる'},
            {part:'二',part_name:'ニ'},
            {part:'木',part_name:'き きへん'},
            {part:'工',part_name:'コウ たくみへん たくみ'},
            {part:'山',part_name:'やま やまへん'},
            {part:'囗',part_name:'くにがまえ'},
            {part:'糸',part_name:'いと いとへん'},
            {part:'耳',part_name:'みみ みみへん'},
            {part:'車',part_name:'くるま くるまへん'},
            {part:'手',part_name:'て てへん'},
            {part:'十',part_name:'ジュウ'},
            {part:'凵',part_name:'かんにょう うけばこ'},
            {part:'女',part_name:'おんな おんなへん'},
            {part:'小',part_name:'ショウ ちいさい しょうがしら なおがしら'},
            {part:'人',part_name:'ひと にんべん ひとがしら ひとやね'},
            {part:'水',part_name:'みず さんずい したみず'},
            {part:'止',part_name:'とめる とめへん'},
            {part:'生',part_name:'セイ ショウ いきる うまれる'},
            {part:'青',part_name:''},
            {part:'夕',part_name:'ゆう ゆうべ タ'},
            {part:'石',part_name:'いし いしへん'},
            {part:'赤',part_name:'あか あかへん'},
            {part:'川',part_name:'まがりかわ かわ さんぽがわ'},
            {part:'儿',part_name:'にんにょう ひとあし'},
            {part:'日',part_name:'ひ にち ひへん にちへん'},
            {part:'足',part_name:'あし あしへん'},
            {part:'大',part_name:'ダイ だいかんむり だいかしら'},
            {part:'田',part_name:'た たへん'},
            {part:'竹',part_name:'たけ たけかんむり'},
            {part:'丨',part_name:'ぼう たてぼう'},
            {part:'虫',part_name:'むし むしへん'},
            {part:'土',part_name:'つち つちへん'},
            {part:'入',part_name:'いる いりがしら いりやね ニュウ'},
            {part:'干',part_name:'カン いちじゅう ほす'},
            {part:'白',part_name:'しろ しろへん'},
            {part:'八',part_name:'ハチ はちがしら'},
            {part:'文',part_name:'ブン ぶんにょう ふみつくり'},
            {part:'目',part_name:'め めへん よこめ'},
            {part:'立',part_name:'たつ たつへん'},
            {part:'力',part_name:'ちから'},
            {part:'弓',part_name:'ゆみ ゆみへん'},
            {part:'羽',part_name:'はね'},
            {part:'辶',part_name:'しんにょう しんにゅう'},
            {part:'禾',part_name:'いね いねへん のぎ のぎへん'},
            {part:'夊',part_name:'すいにょう なつあし'},
            {part:'宀',part_name:'うかんむり'},
            {part:'欠',part_name:'あくび かける'},
            {part:'氵',part_name:'みず さんずい したみず'},
            {part:'角',part_name:'つの つのへん'},
            {part:'門',part_name:'モン もんがまえ かどがまえ'},
            {part:'丶',part_name:'てん'},
            {part:'頁',part_name:'おおがい'},
            {part:'言',part_name:'ことば ゲン ごんべん'},
            {part:'巾',part_name:'はば はばへん きんへん きんべん'},
            {part:'牛',part_name:'うし うしへん'},
            {part:'魚',part_name:'うお さかな うおへん'},
            {part:'亠',part_name:'けいさんかんむり なべぶた けさんかんむり'},
            {part:'攵',part_name:'ぼくづくり ぼくにょう のぶん しぶん とまた'},
            {part:'彡',part_name:'さんづくり けかざり かみかざり'},
            {part:'厂',part_name:'がんだれ'},
            {part:'戸',part_name:'と とかんむり とだれ とびらのと'},
            {part:'彳',part_name:'ぎょうにんべん'},
            {part:'广',part_name:'まだれ'},
            {part:'耂',part_name:''},
            {part:'行',part_name:'ゆきがまえ ぎょうがまえ'},
            {part:'高',part_name:'たかい'},
            {part:'黄',part_name:'き'},
            {part:'谷',part_name:'たに たにへん'},
            {part:'黒',part_name:''},
            {part:'扌',part_name:'て てへん'},
            {part:'矢',part_name:'や やへん'},
            {part:'心',part_name:'こころ りっしんべん したごころ'},
            {part:'寸',part_name:'スン'},
            {part:'自',part_name:'ジ みずから'},
            {part:'礻',part_name:'しめす しめすへん ねへん'},
            {part:'首',part_name:'くび'},
            {part:'曰',part_name:'ひらび いわく'},
            {part:'色',part_name:'いろ'},
            {part:'食',part_name:'ショク しょくへん'},
            {part:'斤',part_name:'おの おのづくり キン'},
            {part:'西',part_name:''},
            {part:'士',part_name:'さむらい さむらいかんむり'},
            {part:'刀',part_name:'かたな りっとう'},
            {part:'舟',part_name:'ふね ふねへん'},
            {part:'刂',part_name:'かたな りっとう'},
            {part:'走',part_name:'はしる そうにょう'},
            {part:'長',part_name:'ながい'},
            {part:'鳥',part_name:'とり とりへん'},
            {part:'⺣',part_name:'ひ ひへん れっか れんが'},
            {part:'夂',part_name:'ふゆがしら ちかんむり のまたかんむり'},
            {part:'⺌',part_name:''},
            {part:'⺮',part_name:'たけ たけかんむり'},
            {part:'冂',part_name:'けいがまえ まきがまえ どうがまえ えんがまえ'},
            {part:'肉',part_name:''},
            {part:'馬',part_name:'うま うまへん'},
            {part:'⼉',part_name:''},
            {part:'麦',part_name:''},
            {part:'父',part_name:'ちち'},
            {part:'風',part_name:'かぜ'},
            {part:'米',part_name:'こめ こめへん'},
            {part:'毋',part_name:'なかれ はは ははのかん'},
            {part:'方',part_name:'ホウ ほうへん かたへん'},
            {part:'匕',part_name:'ヒ さじ さじのひ'},
            {part:'毛',part_name:'け'},
            {part:'里',part_name:'さと さとへん'},
            {part:'又',part_name:'また'},
            {part:'用',part_name:'ヨウ もちいる'},
            {part:'匸',part_name:'かくしがまえ'},
            {part:'阝',part_name:'むら  左：こざと　右：おおざと'},
            {part:'飠',part_name:'ショク しょくへん'},
            {part:'尸',part_name:'しかばね しかばねかんむり かばね かばねだれ'},
            {part:'厶',part_name:'む'},
            {part:'血',part_name:'ち'},
            {part:'示',part_name:'しめす しめすへん ねへん'},
            {part:'皿',part_name:'さら'},
            {part:'歹',part_name:'ガツ がつへん かばねへん しにがまえ いちたへん'},
            {part:'歯',part_name:''},
            {part:'亅',part_name:'はねぼう ケツ かぎ'},
            {part:'弋',part_name:'ヨク しきがまえ'},
            {part:'冖',part_name:'わかんむり べきかんむり'},
            {part:'酉',part_name:'とりへん ひよみのとり さけのとり とり'},
            {part:'隹',part_name:'ふるとり'},
            {part:'戶',part_name:''},
            {part:'丿',part_name:'の はらいぼう'},
            {part:'身',part_name:'み みへん'},
            {part:'羊',part_name:'ひつじ ひつじへん'},
            {part:'豆',part_name:'まめ まめへん'},
            {part:'癶',part_name:'はつがしら'},
            {part:'辰',part_name:'しんのたつ'},
            {part:'皮',part_name:'けがわ ひのかわ'},
            {part:'鼻',part_name:'はな はなへん'},
            {part:'衣',part_name:'ころも ころもへん'},
            {part:'疒',part_name:'やまいだれ'},
            {part:'牜',part_name:'うし うしへん'},
            {part:'面',part_name:'メン'},
            {part:'卩',part_name:'ふしづくり まげわりふ わりふ'},
            {part:'カ',part_name:''},
            {part:'⼭',part_name:''},
            {part:'廴',part_name:'えんにょう えんにゅう いんにょう'},
            {part:'香',part_name:'かおり カ'},
            {part:'氏',part_name:'うじ'},
            {part:'辛',part_name:'シン からい'},
            {part:'鹿',part_name:'しか'},
            {part:'臣',part_name:'シン'},
            {part:'戈',part_name:'ほこ ほこづくり ほこがまえ たすき かのほこ'},
            {part:'罒',part_name:''},
            {part:'飛',part_name:'とぶ'},
            {part:'阜',part_name:''},
            {part:'勹',part_name:'つつみがまえ'},
            {part:'覀',part_name:''},
            {part:'艮',part_name:'コン ゴン こんづくり ごんづくり ねづくり うしとら'},
            {part:'斗',part_name:'とます ます ト'},
            {part:'冫',part_name:'にすい'},
            {part:'老',part_name:'おいる おいかんむり おいがしら'},
            {part:'忄',part_name:'こころ りっしんべん したごころ'},
            {part:'耒',part_name:'らいすき すきへん'},
            {part:'臼',part_name:'うす'},
            {part:'殳',part_name:'ほこづくり ほこ るまた'},
            {part:'支',part_name:'しにょう えだにょう じゅうまた'},
            {part:'豕',part_name:'いのこ いのこへん ぶた'},
            {part:'玄',part_name:'ゲン'},
            {part:'犭',part_name:'けものへん'},
            {part:'片',part_name:'かた かたへん'},
            {part:'比',part_name:'ヒ ならびひ くらべる'},
            {part:'非',part_name:'あらず ヒ'},
            {part:'衤',part_name:'ころも ころもへん'},
            {part:'廾',part_name:'キョウ こまぬき にじゅうあし'},
            {part:'革',part_name:'かわへん つくりがわ'},
            {part:'己',part_name:''},
            {part:'㔾',part_name:''},
            {part:'疋',part_name:'ヒキ ひきへん'},
            {part:'骨',part_name:'ほね ほねへん'},
            {part:'至',part_name:'いたる いたるへん'},
            {part:'尢',part_name:'だいのまげあし まげあし おうにょう オウ'},
            {part:'几',part_name:'つくえ きにょう つくえきにょう かぜかんむり かぜがまえ'},
            {part:'舌',part_name:'した したへん'},
            {part:'乚',part_name:''},
            {part:'幺',part_name:'ヨウ いとがしら'}
        ],
        part_item_name:'',
        status_info:'',
        outside2:'',
        outside3:[]
    },
    methods: {
        addAnswer: function(index) {
            if(index!=1){index=''}
            this.answers.push(index);
            this.turnIndex++;
            if(this.filtered_items.length!=this.turnIndex){
                //this.rest_clss()
            }

        },
        reduceAnswer: function(index) {
            this.answers.pop(index);
            this.turnIndex--;
            //this.rest_clss()
        },
        back_to_first: function(){
            this.turnIndex=0;
            this.create_url=''

            //this.rest_clss()
        },
        jud_o: function(array,index){

            if(this.view_mode==0){
                this.filtered_items[this.turnIndex].weak="9"
                arc1=this.filtered_items
                arc2=this.weak_items
            }else{
                this.weak_items[this.turnIndex].weak="9"
                arc1=this.weak_items
                arc2=this.filtered_items
            }
            int_chk1=0
            for(int_loop1=0;int_loop1<arc2.length;int_loop1++){
                if(arc2[int_loop1].letter==arc1[this.turnIndex].letter){
                    int_chk1=1
                    arc2[int_loop1].weak="9"
                    break;
                }
            }
        },
        jud_x: function(index){
            this.v_cau="caution1"
            if(this.view_mode==0){
                this.filtered_items[this.turnIndex].weak="1"
                arc1=this.filtered_items
                arc2=this.weak_items
            }else{
                this.weak_items[this.turnIndex].weak="9"
                arc1=this.weak_items
                arc2=this.filtered_items
            }
            int_chk1=0
            for(int_loop1=0;int_loop1<arc2.length;int_loop1++){
                if(arc2[int_loop1].letter==arc1[this.turnIndex].letter){
                    int_chk1=1
                    arc2[int_loop1].weak="1"
                    break;
                }
            }


            //無くて=int_chk1　caution1=x=赤化　で　arc2に　letter　が存在しなかったら。無かったっつってるだろ。
            if(int_chk1==0){
                arc2.push(arc1[this.turnIndex])
                if(this.view_mode==0){
                    this.weak_cnt++
                }

            }



        },
        jud_cxl: function(index){
            this.v_cau=""
            if(this.view_mode==0){
                this.filtered_items[this.turnIndex].weak=""
                arc1=this.filtered_items
                arc2=this.weak_items

            }else{
                this.weak_items[this.turnIndex].weak=""
                arc1=this.weak_items
                arc2=this.filtered_items

            }
            int_chk1=0
            for(int_loop1=0;int_loop1<arc2.length;int_loop1++){
                if(arc2[int_loop1].letter==arc1[this.turnIndex].letter){
                    int_chk1=1
                    arc2[int_loop1].weak=""
                    break;
                }
            }




        },
        rtn_toggle: function(index){
            if(this.view_mode==0 || this.view_mode==2){
                arc1=this.filtered_items
                arc2=this.weak_items
            }else{
                arc1=this.weak_items
                arc2=this.filtered_items
            }

            //*************** 右回り ************** */
            var str_decide1='';
            if(this.view_mode==0 || this.view_mode==2){
                if(arc1[index].weak=='' || arc1[index].weak=='0'){
                    arc1[index].weak='9'
                    str_decide1='9'
                }else if(arc1[index].weak=='9'){
                    arc1[index].weak='1'
                    str_decide1='1'
                }else{
                    arc1[index].weak=''
                }
            //*************** 左回り ************** */
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
            int_chk1=0
            for(int_loop1=0;int_loop1<arc2.length;int_loop1++){
                if(arc2[int_loop1].letter==arc1[index].letter){
                    int_chk1=1
                    arc2[int_loop1].weak=str_decide1
                    break;
                }
            }
            //無くて=int_chk1　caution1=x=赤化　で　arc2に　letter　が存在しなかったら。無かったっつってるだろ。
            //console.log(int_chk1)
            if(int_chk1==0 && str_decide1==1){
                arc2.push(arc1[index])
                //if(this.view_mode==0){
                    this.weak_cnt++
                //}
            }
        },
        sample_toggle: function(index){
            if(this.view_mode==4){
                arc1=this.filtered_items
                arc2=this.weak_items
            }else{
                arc1=this.weak_items
                arc2=this.filtered_items
            }

            //*************** 右回り ************** */
            var str_decide1='';
            if(this.view_mode==4){
                if(arc1[index].weak=='' || arc1[index].weak=='0'){
                    arc1[index].weak='9'
                    str_decide1='9'
                }else if(arc1[index].weak=='9'){
                    arc1[index].weak='1'
                    str_decide1='1'
                }else{
                    arc1[index].weak=''
                }
            //*************** 左回り ************** */
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
            int_chk1=0
            //console.log(arc2.length)
            for(int_loop1=0;int_loop1<arc2.length;int_loop1++){
                
                //console.log(arc2[int_loop1].letter +" " +arc1[index].letter)
                if(arc2[int_loop1].letter==arc1[index].letter){

                    int_chk1=1
                    arc2[int_loop1].weak=str_decide1
                    break;
                }
            }
            //無くて=int_chk1　caution1=x=赤化　で　arc2に　letter　が存在しなかったら。無かったっつってるだろ。
            if(int_chk1==0 && str_decide1==1){
                arc2.push(arc1[index])
                //if(this.view_mode==0){
                this.weak_cnt++
                //}
            }



        },
        view_toggle: function(){
            if(this.view_mode==0){
                this.view_mode=1
            }else if(this.view_mode==1){
                this.view_mode=2
            }else if(this.view_mode==2){
                this.view_mode=3
            }else if(this.view_mode==3){
                this.view_mode=4
            }else if(this.view_mode==4){
                this.view_mode=5
            }else if(this.view_mode==5){
                this.view_mode=0
            }
            this.turnIndex=0
        },
        view0:function(){
            detail1.open=false
            this.turnIndex=0
            this.view_mode=0
            this.create_url=''
        },
        view1:function(){
            detail1.open=false
            this.turnIndex=0
            this.view_mode=1
            this.create_url=''
        },
        view2:function(){
            detail1.open=false
            this.turnIndex=0
            this.view_mode=2
            this.create_url=''
        },
        view3:function(){
            detail1.open=false
            this.turnIndex=0
            this.view_mode=3
            this.create_url=''
        },
        view4:function(){
            detail1.open=false
            this.turnIndex=0
            this.view_mode=4
            this.create_url=''
        },
        view5:function(){
            detail1.open=false
            this.turnIndex=0
            this.view_mode=5
            this.create_url=''
        },
        change_disp:function(school,year){
            year1.open=false

            if(school!=""){this.str_school=school;}

            if(this.str_school=='Elementary'){
                if(year!=""){this.str_year=year;}
            }else{
                this.str_year=""
            }
            this.shuffled=0
            this.turnIndex=0
            this.view_mode=2
            window.location.href = 'index.htm?school='+this.str_school+'&year='+this.str_year+'&view_mode='+this.view_mode
        },
        change_semester:function(semester){
            semester1.open=false

            //console.log(semester)

            if(semester!=""){
                this.str_semester=semester
            }else{
                this.str_semester=""
            }
            this.year_group.splice(0)
            this.filtered_items.splice(0)
            this.shuffle_items.splice(0)
            this.weak_items.splice(0)


            this.shuffled=0
            this.turnIndex=0
            //this.view_mode=0
            //console.log(semester)
            this.first_set()
        },
        create_status_now: function(){

            //console.log("11")

            //console.log(this.shuffled)
            this.create_status_code()

            this.create_url=1;

            if(this.view_mode==0 || this.view_mode==2 || this.view_mode==4){
                this.turnIndex=this.filtered_items.length
                //return (this.filtered_items.length == this.turnIndex++);
            }else{
                this.turnIndex=this.weak_items.length
                //return (this.weak_items.length == this.turnIndex++);

            }
        },
        visibility_toggle: function(mode,index){
            if(mode=="filtered"){
                arc=this.filtered_items
            }else{
                arc=this.weak_items
            }

            if(arc[index].etc2==''){
                arc[index].etc2=1
            }else{
                arc[index].etc2=''
            }



        },
        create_year_group: function(array){
            //console.log(this.str_year)
            for (let i = array.length - 1; i > -1; i--) {
                if(array[i].year==this.str_year){
                    this.year_group.push(array[i])
                }
            }
        },
        shuffle: function(array) {
            for (let i = array.length - 1; i > 0; i--) {
                let r = Math.floor(Math.random() * (i + 1))
                let tmp = array[i]
                array[i] = array[r]
                array[r] = tmp
            }
            /*array.splice(12,array.length)*/
            return array
        },
        filtering: function(array) {

            //console.log(this.str_school)
            //console.log(this.str_year)





            for (let i = array.length - 1; i > -1; i--) {
                let int_doit1=0
                if(array[i].school==this.str_school){int_doit1=1}
                if(int_doit1==1 && this.str_year!=""){
                    if(array[i].year==this.str_year){int_doit1=1}else{int_doit1=0}
                }
                if(int_doit1==1 && (this.str_semester!="" && this.str_semester!=null)){
                    if(array[i].semester==this.str_semester){int_doit1=1}else{int_doit1=0}
                }
                if(int_doit1==1){
                    this.filtered_items.push(array[i])
                }

            }
            /*array.splice(12,array.length)*/
            return this.filtered_items
        },
        //rest_clss: function(index){
        //    this.v_cau="cc" + this.turnIndex
        //    if(this.filtered_items[this.turnIndex].weak==1){
        //        this.v_cau="caution1"
        //    }else if(this.filtered_items[this.turnIndex].weak==9){
        //        this.v_cau="chkd"
        //
        //    }else{
        //        this.v_cau=""
        //    }
        //},
        create_status_code: function(){
            //console.log(this.year_group[0].letter)
            //console.log(this.year_group.length)
            //console.log(this.filtered_items.length)
            let str_binary=""
            for (let int_loop1 = this.year_group.length - 1 ; int_loop1 >-1 ; int_loop1--) {
                //console.log(this.year_group[int_loop1].letter)
                //console.log("1")

                let int_weak=0
                let int_exist1=0

                if(this.view_mode==0 || this.view_mode==2 || this.view_mode==4){

                    for (let int_loop2 = 0; int_loop2 < this.filtered_items.length; int_loop2++) {
                        if(this.year_group[int_loop1].letter == this.filtered_items[int_loop2].letter){
                            if(this.filtered_items[int_loop2].weak==1){
                                int_weak=1
                                int_exist1=1
                                break
                            }
                        }
                    }
                }else if(this.view_mode==1 || this.view_mode==3 || this.view_mode==5){
                    for (let int_loop2 = 0; int_loop2 < this.weak_items.length; int_loop2++) {
                        if(this.year_group[int_loop1].letter == this.weak_items[int_loop2].letter){
                            if(this.weak_items[int_loop2].weak==1){
                                int_weak=1
                                int_exist1=1
                                break
                            }
                        }
                    }
                }



                //******途中でurl生成した場合苦手が合った場合0になるのを防ぐよ***** */
                //if(int_exist1==0 && this.year_group[int_loop1].weak==1){
                //    int_weak=1
                //}
                str_binary=str_binary+int_weak
                //console.log(this.year_group[int_loop1].letter +" "+ int_weak)
            }
            //console.log(str_binary)
            //let str_dec="x"
            //str_dec=str_dec+parseInt(str_binary, 2)
            //console.log(str_dec)

            /* ******************************************************************************* */
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
            //var byte;
            //var num10=num
            //var over = new Num(256).power(byte);
            //num10 = over.subtract(num).negate();
            //console.log(num10.value[0]);
            for(let int_loop1=0;int_loop1 < num.value.length;int_loop1++){
                str_decimal=str_decimal+num.value[int_loop1]
            }



            this.current_url=location.protocol
            this.current_url=this.current_url+'//'
            this.current_url=this.current_url+location.hostname
            this.current_url=this.current_url+location.pathname
            this.current_url=this.current_url+'?school='+this.str_school
            this.current_url=this.current_url+'&year='+this.str_year
            this.current_url=this.current_url+'&semester='+this.str_semester
            
            this.current_url=this.current_url+'&status='+str_decimal
            this.current_url=this.current_url+'&digit='+this.year_group.length
            this.current_url=this.current_url+'&view_mode='+this.view_mode





            //console.log(location.href+'&status='+str_decimal+'&digit='+str_binary.length)
        },
        dec_to_bin: function(value){
            /* ******************************************************************************* */
            num = new Num(value);

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


            for(int_loop1=0;int_loop1 < parseInt(this.str_digit);int_loop1++){
                str_zero_digit=str_zero_digit+0
            }
            //console.log(str_zero_digit)
            //console.log(result)
            var str_pre_binary=str_zero_digit+result
            this.weak_binary_from_status = str_pre_binary.slice(-this.str_digit)
            //console.log(this.weak_binary_from_status)
        },
        first_set: function(){

            
            let int_loop1=0


            if ((this.str_school==null || this.str_school=="") && (this.str_year==null || this.str_year=="")){
                this.str_school='Elementary'
                this.str_year=3
            }
  
  
            //console.log(this.str_semester)
  
            if(this.str_semester=="undefined" || this.str_semester==null || this.str_semester==""){this.str_semester=""}
            if(this.str_status==null || this.str_status==""){this.str_status=""}
            if(this.str_digit==null || this.str_digit==""){this.str_digit=""}
            if(this.str_view_mode==null || this.str_view_mode==""){this.str_view_mode=0}






            //console.log(this.shuffled)

            /*this.shuffle_items = this.shuffle(this.questions)*/
            //console.log(str_status)


            //console.log(this.questions.length)
            this.create_year_group(this.questions)
            //console.log(this.year_group.length)



            if(this.str_status!=null && this.str_status.length!=0){
                this.dec_to_bin(this.str_status)
                let int_loop1_rev=0
                for(int_loop1=this.year_group.length-1;int_loop1>-1;int_loop1--){
                    /* **********************ここでweak対比表が見られる************************* */
                    /* **********************ここでweak対比表が見られる************************* */
                    //console.log(this.year_group[int_loop1].letter + " " + this.weak_binary_from_status[int_loop1_rev])
                    /* **********************ここでweak対比表が見られる************************* */
                    /* **********************ここでweak対比表が見られる************************* */
                    this.year_group[int_loop1].weak=this.weak_binary_from_status[int_loop1_rev]
                    int_loop1_rev=int_loop1_rev+1
                }
                //console.log(this.weak_binary_from_status)
            }else{
                this.status_info="このURLですと苦手問題は判別できません。表示を切替えるか、1度最後まで回答すると。苦手が反映されたURLが表示されます。";
            }

            //console.log(this.status_info)



            //***********ここを超えると shuffle 完了*************** */
            for(int_loop1=this.year_group.length-1;int_loop1>-1;int_loop1--){
                this.shuffle_items.push(this.year_group[int_loop1])
            }

            //console.log(this.year_group.length)
            //console.log(this.year_group[0].letter)
            this.shuffle(this.shuffle_items)


            //console.log(this.shuffle_items.length)


            //***********ここを超えると filter 完了*************** */
            this.filtering(this.shuffle_items)
            this.filtered_cnt=this.filtered_items.length
            let ar_spl1=""
            for(int_loop1=0;int_loop1<this.filtered_items.length;int_loop1++){

                ar_spl1=this.filtered_items[int_loop1].e1read.split("-")
                this.filtered_items[int_loop1].e1sample=this.filtered_items[int_loop1].e1sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].e2read.split("-")
                this.filtered_items[int_loop1].e2sample=this.filtered_items[int_loop1].e2sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].e3read.split("-")
                this.filtered_items[int_loop1].e3sample=this.filtered_items[int_loop1].e3sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].e4read.split("-")
                this.filtered_items[int_loop1].e4sample=this.filtered_items[int_loop1].e4sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].e5read.split("-")
                this.filtered_items[int_loop1].e5sample=this.filtered_items[int_loop1].e5sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].e6read.split("-")
                this.filtered_items[int_loop1].e6sample=this.filtered_items[int_loop1].e6sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].e7read.split("-")
                this.filtered_items[int_loop1].e7sample=this.filtered_items[int_loop1].e7sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].e8read.split("-")
                this.filtered_items[int_loop1].e8sample=this.filtered_items[int_loop1].e8sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].e9read.split("-")
                this.filtered_items[int_loop1].e9sample=this.filtered_items[int_loop1].e9sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].e10read.split("-")
                this.filtered_items[int_loop1].e10sample=this.filtered_items[int_loop1].e10sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].e11read.split("-")
                this.filtered_items[int_loop1].e11sample=this.filtered_items[int_loop1].e11sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].j1read.split("-")
                this.filtered_items[int_loop1].j1sample=this.filtered_items[int_loop1].j1sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].j2read.split("-")
                this.filtered_items[int_loop1].j2sample=this.filtered_items[int_loop1].j2sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].j3read.split("-")
                this.filtered_items[int_loop1].j3sample=this.filtered_items[int_loop1].j3sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].j4read.split("-")
                this.filtered_items[int_loop1].j4sample=this.filtered_items[int_loop1].j4sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].j5read.split("-")
                this.filtered_items[int_loop1].j5sample=this.filtered_items[int_loop1].j5sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].j6read.split("-")
                this.filtered_items[int_loop1].j6sample=this.filtered_items[int_loop1].j6sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].j7read.split("-")
                this.filtered_items[int_loop1].j7sample=this.filtered_items[int_loop1].j7sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].j8read.split("-")
                this.filtered_items[int_loop1].j8sample=this.filtered_items[int_loop1].j8sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].j9read.split("-")
                this.filtered_items[int_loop1].j9sample=this.filtered_items[int_loop1].j9sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].j10read.split("-")
                this.filtered_items[int_loop1].j10sample=this.filtered_items[int_loop1].j10sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].j11read.split("-")
                this.filtered_items[int_loop1].j11sample=this.filtered_items[int_loop1].j11sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].h1read.split("-")
                this.filtered_items[int_loop1].h1sample=this.filtered_items[int_loop1].h1sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].h2read.split("-")
                this.filtered_items[int_loop1].h2sample=this.filtered_items[int_loop1].h2sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].h3read.split("-")
                this.filtered_items[int_loop1].h3sample=this.filtered_items[int_loop1].h3sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].h4read.split("-")
                this.filtered_items[int_loop1].h4sample=this.filtered_items[int_loop1].h4sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].h5read.split("-")
                this.filtered_items[int_loop1].h5sample=this.filtered_items[int_loop1].h5sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].h6read.split("-")
                this.filtered_items[int_loop1].h6sample=this.filtered_items[int_loop1].h6sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].h7read.split("-")
                this.filtered_items[int_loop1].h7sample=this.filtered_items[int_loop1].h7sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].h8read.split("-")
                this.filtered_items[int_loop1].h8sample=this.filtered_items[int_loop1].h8sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].h9read.split("-")
                this.filtered_items[int_loop1].h9sample=this.filtered_items[int_loop1].h9sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].h10read.split("-")
                this.filtered_items[int_loop1].h10sample=this.filtered_items[int_loop1].h10sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
                ar_spl1=this.filtered_items[int_loop1].h11read.split("-")
                this.filtered_items[int_loop1].h11sample=this.filtered_items[int_loop1].h11sample.replace(new RegExp(this.filtered_items[int_loop1].letter,"g"),ar_spl1[0])
            }















            //***********ここを超えると weak 完了*************** */

            if(this.str_status!=null && this.str_status.length!=0){

                console.log("ないのに？")

                for(int_loop1=0;int_loop1<this.filtered_items.length;int_loop1++){
                    if(this.filtered_items[int_loop1].weak==1){
                        this.weak_items.push(this.filtered_items[int_loop1])
                    }
                }
            
            }
            this.weak_cnt=this.weak_items.length

            




            this.shuffled=1
            //this.rest_clss()
            //console.log(str_view_mode)
            if(this.view_mode=="" || this.view_mode==null){
                this.view_mode=this.str_view_mode
            }
            //console.log(this.year_group[0].letter)
            
            if(this.str_school!=null){
                this.url_prop=this.str_school
            }
            
            if(this.str_year!=null){
                this.url_prop=this.url_prop + this.str_year
            }
            if(this.str_semester!=null && this.str_semester.length!=0){
                this.url_prop=this.url_prop + " Semester" + this.str_semester
            }


        },
        import_kanji: function(){
            import("./kanji_20220330.js")
            .then(module => {
                //this.outside2 = new module;
                //this.outside2 = new module.questions;
                //this.outside2 = new module.Object
                //this.outside2 = new module.freeze
                //this.outside2 = new module.freeze()
                //this.outside2 = new module.Object()
                //this.outside2 = new module.Object(questions)
                //this.outside2 = new module.Object.freeze()
                //this.outside2 = module.freeze;
                //this.outside2 = module.default.questions
                //this.outside2 = module.questions
                //this.outside2 = module.Object.freeze.questions
                //this.outside3=module.questions
                //console.log(module.length)
                //console.log(module.Object.length)
                //console.log(module.questions.length)
                //console.log(module.freeze.length)
                //console.log(module.default.length)
                this.outside3=module.default
                this.questions=this.outside3.questions
                this.first_set()
            });
        }
    },
    computed: {
        currentTurn: function() {

            if(this.shuffled==0){
                this.import_kanji()
                //this.outside2 = import("./kanji_20220330.js")
                //console.log(this.outside2.questions.length)
                //console.log(this.outside3.length)
            }

            //console.log(this.year_group.length)
            //console.log(this.filtered_items.length)
            
            //console.log(this.turnIndex)
            let ar_path=location.pathname.split("/")
            let str_page_file=ar_path[ar_path.length-1]
            //console.log(this.view_mode)

            let int_loop1=0
            if(this.view_mode==0){
                //console.log(this.filtered_items[this.turnIndex].part)
                this.part_item_name=""
                for(int_loop1=0;int_loop1<this.part_items.length;int_loop1++){
                    if(this.part_items[int_loop1].part==this.filtered_items[this.turnIndex].part){
                        this.part_item_name=this.part_items[int_loop1].part_name
                        break;
                    }
                }
                //this.filtered_cnt=this.shuffle_items.length
                //return this.shuffle_items[this.turnIndex];

                if(this.filtered_items[this.turnIndex].weak==1){
                    this.v_cau="caution1"
                }else{
                    this.v_cau=""
                }
                return this.filtered_items[this.turnIndex];

            }else if(this.view_mode==1){
                    this.part_item_name=""
                    for(int_loop1=0;int_loop1<this.part_items.length;int_loop1++){
                        if(this.part_items[int_loop1].part==this.weak_items[this.turnIndex].part){
                            this.part_item_name=this.part_items[int_loop1].part_name
                            break;
                        }
                    }
                    this.v_cau="caution1"
                    return this.weak_items[this.turnIndex];
            }else if(this.view_mode==2 || this.view_mode==4){
                return this.filtered_items;
            }else if(this.view_mode==3 || this.view_mode==5){
                return this.weak_items;
            }

            //if(this.create_url==1){

            //    console.log("dd")
            //}            


        },
        completed: function() {
            if(this.shuffled!=0){
                //console.log(this.filtered_items.length)
                //console.log(this.turnIndex)


                if(this.view_mode==0){
                    if(this.filtered_items.length==this.turnIndex){
                        //console.log("gg")
                        this.create_status_code()
                        return this.current_url
                    } 
                  
                    return (this.filtered_items.length == this.turnIndex);
                }else if(this.view_mode==1){
                    if(this.weak_items.length==this.turnIndex){
                        //console.log("gg")
                        this.create_status_code()
                        return this.current_url
                    } 
    
                    return (this.weak_items.length == this.turnIndex);
                    
                }

            }
        }
    }
})
