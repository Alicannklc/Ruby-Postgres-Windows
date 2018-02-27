
var nb_Numarasi = '0023780009040';
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
//if(window.innerWidth <= 1024 && window.innerHeight <= 768) {
if (isMobile.any()) {

    /* Setup */

    /* Phone number */
    var numapaPaneli_tel = nb_Numarasi;

    const renkler = ['#ea0069','#426ac5','#42c54c'];
    var pencere_baslik_arkaplan_renk = renkler[Math.floor((Math.random() * (renkler.length - 0)))];

    /* Search rear window button color */
    var pencere_ara_buton_arka_renk = "#3FCA4F";

    /* back bottom color */
    const diprenkler = ['#e40e59','#f33900','#d20000'];
    var dip_arka_renk = diprenkler[Math.floor((Math.random() * (diprenkler.length - 0)))];

    /* Text Messages (random) */
    var ayarlar_metin1 = 'Ben Nazlı, senle konuşmak istiyorum. Açar mısın telefonu?';
    var ayarlar_metin2 = 'Seks muhabbeti etmeye varmısın? Yanıtla bekliyorum.';
    var ayarlar_metin3 = 'En sexy fantazilerimi senle paylaşmak istiyorum. Hazırmısın?';


    /* running streamline */
    var streamline = 'EN ATEŞLİ VE EN SEKSİ KIZLARLA SOHBET İÇİN HEMEN TIKLA VE ARA';

    /* Base Url (without slash) */
    var numapaPaneli_adres = 'http://rek2.adsblok.com/code/';

    /* window title text */
    var pencere_baslik_metin = 'a';
    var img_ico  = '<img style="float:right;margin-top:3px" width="21" src="http://rek2.adsblok.com/code/tel.png"/>';
    var pencere_icon = '<h4 style="float:left;margin:0;">Arıyor...</h4>' + img_ico;

    /* CallMe window button text */
    var pencere_ara_buton_metin = 'YANITLA';

    /* refused to enter text window */
    var pencere_reddet_buton_metin = 'KAPAT';

    /* random content window */
    var pencere_icerik_rastgele = true;

    /* How many times window */
    var pencere_kac_kez = 1;

    /* window at the earliest */
    var pencere_en_erken = 1;

    /* window late at */
    var pencere_en_gec = 2;

    /* Random titles / Panel names / msg box */
    var numapaPaneli_isimler = ["Zeynep",
        "Elif", "Ecrin", "Yağmur", "Azra",
        "Nisanur", "Zehra", "Nehir", "Ela",
        "Belinay", "Hiranur", "Eylül", "Meryem",
        "Aslı", "Sümeyye", "İrem", "Hatice",
        "Rabia", "Elanur", "Ayşe", "Cemre",
        "Fatma", "Tuana", "Medine", "Büşra", "Damla",
        "Nisa", "Esmanur", "Esma", "Emine", "Melek",
        "Melisa", "Beren", "Irmak", "Buğlem", "Ceylin",
        "Kübra", "Betül", "Duru", "Nisa", "Ceren",
        "Beyza", "Yaren", "Asya", "Ebrar", "Melike",
        "Defne", "Ayşegül", "Berra", "Berfin", "Asmin",
        "Şevval", "Ece", "İlayda", "Sudenaz",
        "Ada", "Hilal", "Ayşenur", "Edanur",
        "Esila", "Rümeysa", "Esra", "Eslem",
        "Deniz", "Bahar", "Eda", "Derin",
        "Miray", "Hazal", "Fatma", "Fatmanur",
        "Gamze", "Semanur", "Melis", "Ipek", "Zümra",
        "Nazlı", "Tuğba", "Mina", "Erva", "Cansu",
        "Öykü", "Havin", "Şeyma", "Hümeyra", "Havva",
        "Sıla", "Aylin", "Hatice", "Yasemin", "Gizem",
        "Aleyna", "Beyzanur"];

    /* Code Start */
    var numapaPaneli_resimler = [
        numapaPaneli_adres + 'https://3.bp.blogspot.com/-wAowXN02JiA/WpUsOyoF1GI/AAAAAAAAAKQ/pBh953luSOQyIeWHNt_Bx03EYIvvY_R3ACLcBGAs/s1600/rus1.png',
        numapaPaneli_adres + 'https://2.bp.blogspot.com/-1vD7vv9EqZU/WpUsQKP4U6I/AAAAAAAAAKU/cz1L01BKwJMS4YcXDappPhM3HORyEtISgCLcBGAs/s1600/rus2.png',
        numapaPaneli_adres + 'https://3.bp.blogspot.com/-sqWGnv2gX8c/WpUsRwCxCEI/AAAAAAAAAKY/lKWl4KHhYHIG9LRcwL3Yt44QJAqnK_gOwCLcBGAs/s1600/rus3.png'

    ];
    var  numaratel = "<h4 style='margin:0;line-height:43px;color:#fff;font-size:14px;font-family:Segoe, \"Segoe UI\", \"DejaVu Sans\", \"Trebuchet MS\", Verdana, sans-serif'><img width='28' style='float:left;margin-top:8px;margin-right:7px;' src='http://rek2.adsblok.com/code/tel2.png' alt=''> HEMEN ARA<h2/>";

    var numapaPaneli_telefon = numapaPaneli_adres + 'http://rek2.adsblok.com/code/box/images/anigif.gif';
    var numapaPaneli_ses = numapaPaneli_adres + 'http://rek2.adsblok.com/code/box/mp3/ring.mp3';

    var numaraPaneli = function (bf) {
        "use strict";
        this.aa = 0;
        this.ab = 0;
        this.ac = window.innerWidth;
        this.ad = window.innerHeight;
        if (this.ac % 2 !== 0) {
            this.ac++;
        }
        if (this.ad % 2 !== 0) {
            this.ad++;
        }
        this.ae = true;
        this.af = bf.tipi;
        this.ag = bf.masaustu;
        this.vc = bf.numaratel;
        this.ah = bf.dip_metin;
        this.ai = bf.dip_arka_renk;
        this.aj = bf.dip_metin_renk;
        this.ak = bf.dip_logo;
        this.al = bf.dip_hiz;
        this.am = bf.dip_taraf;
        this.an = bf.pencere_baslik_metin;
        this.st = bf.pencere_icon;
        this.ao = bf.pencere_baslik_renk;
        this.ap = bf.pencere_baslik_arkaplan_renk;
        this.aq = bf.pencere_ara_buton_metin;
        this.ar = bf.pencere_ara_buton_renk;
        this.as = bf.pencere_ara_buton_arka_renk;
        this.at = bf.pencere_reddet_buton_metin;
        this.au = bf.pencere_reddet_buton_renk;
        this.av = bf.pencere_reddet_buton_arka_renk;
        this.aw = bf.pencere_icerik;
        this.ax = bf.pencere_icerik_rastgele;
        this.ay = bf.pencere_kac_kez;
        this.az = bf.pencere_en_erken;
        this.ba = bf.pencere_en_gec;
        this.bb = bf.pencere_ses;
        this.bc = bf.pencere_titresim;
        this.bd = bf.pencere_transparan_renk;
        this.be = bf.pencere_transparan_miktar;
        navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
        if (typeof this.af === 'undefined' || (this.af !== 'hepsi' && this.af !== 'dip' && this.af !== 'pencere')) {
            this.af = 'hepsi';
        }
        if (typeof this.ag === 'undefined' || (this.ag !== true && this.ag !== false)) {
            this.ag = false;
        }
        if (typeof this.ah === 'undefined' || this.ah.length < 10 || this.ah.length > 255) {
            this.ah = streamline;
        }
        if (typeof this.vc === 'undefined' || this.vc.length < 10 || this.vc.length > 125){
            this.vc = 'hepsi';
        }
        if (typeof this.ai === 'undefined' || !/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.ai)) {
            this.ai = '#3b5998';
        }
        if (typeof this.aj === 'undefined' || !/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.aj)) {
            this.aj = '#FFF';
        }
        if (typeof this.ak === 'undefined') {
            this.ak = ':resim:';
        }
        if (typeof this.al === 'undefined' || this.al < 1 || this.al > 50) {
            this.al = 6;
        }
        if (typeof this.am === 'undefined' || (this.am !== 'saga' && this.am !== 'sola')) {
            this.am = 'sola';
        }
        if (typeof this.an === 'undefined' || this.an.length < 3 || this.an.length > 30) {
            this.an = 'ARAMA İSTEĞİ';
        }
        if(typeof  this.st === 'undefined' || this.st.length < 3 || this.st.length > 160){
            this.st = 'TELEFON ÇAĞRISI';
        }
        if (typeof this.ao === 'undefined' || !/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.ao)) {
            this.ao = '#FFF';
        }
        if (typeof this.ap === 'undefined' || !/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.ap)) {
            this.ap = '#3b5998';
        }
        if (typeof this.aq === 'undefined' || this.aq.length < 3 || this.aq.length > 16) {
            this.aq = 'HEMEN ARA';
        }
        if (typeof this.ar === 'undefined' || !/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.ar)) {
            this.ar = '#FFF';
        }
        if (typeof this.as === 'undefined' || !/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.as)) {
            this.as = '#3b5998';
        }
        if (typeof this.at === 'undefined' || this.at.length < 3 || this.at.length > 16) {
            this.at = 'REDDET';
        }
        if (typeof this.au === 'undefined' || !/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.au)) {
            this.au = '#A8A8A8';
        }
        if (typeof this.av === 'undefined' || !/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.av)) {
            this.av = '#DDDDDD';
        }
        if (typeof this.ax === 'undefined' || (this.ax !== true && this.ax !== false)) {
            this.ax = true;
        }
        if (typeof this.ay === 'undefined') {
            this.ay = 1;
        }
        if (typeof this.az === 'undefined' || this.az < 1 || this.az > 180) {
            this.az = 45;
        }
        if (typeof this.ba === 'undefined' || this.ba < this.az || this.ba > 300) {
            this.ba = this.az + 15;
        }
        if (typeof this.bb === 'undefined' || (this.bb !== true && this.bb !== false)) {
            this.bb = false;
        }
        if (navigator.vibrate && (typeof this.bc === 'undefined' || (this.bc !== true && this.bc !== false))) {
            this.bc = false;
        }
        if (typeof this.bd === 'undefined' || !/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.bd)) {
            this.bd = '#000000';
        }
        if (typeof this.be === 'undefined' || this.be < 1 || this.be > 100) {
            this.be = 60;
        }

        if (typeof this.aw === 'object') {
            this.bg = [];
            for (this.i = 0; this.i < this.aw.length; this.i++) {
                if (typeof this.aw[this.i].resim !== 'undefined' && typeof this.aw[this.i].metin !== 'undefined') {
                    this.bg.push(this.aw[this.i]);
                }
            }
            this.aw = this.bg;
        } else {
            this.aw = [];
            this.bg = {
                resim: numapaPaneli_resimler[Math.floor(Math.random() * numapaPaneli_resimler.length)],
                metin: 'Site kullanıcılarımızdan ' + numapaPaneli_isimler[Math.floor(Math.random() * numapaPaneli_isimler.length)] + ' sizinle telefonda konuşmak istiyor.'
            };
            this.aw.push(this.bg);
        }
        this.bh = this.aw.length;
        this.az = this.az * 1000;
        this.ba = this.ba * 1000;
        this.ah = this.ah.replace(/:isim:/g, numapaPaneli_isimler[Math.floor(Math.random() * numapaPaneli_isimler.length)]);
        this.ak = this.ak.replace(':resim:', numapaPaneli_resimler[Math.floor(Math.random() * numapaPaneli_resimler.length)]);

        if (!this.ag) {
            var ua = navigator.userAgent.toLowerCase();
            var isMobile = (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm(os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(ua) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s)|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp(i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac(|\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt(|\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg(g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v)|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v)|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-|)|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0, 4)));
            if (!isMobile) {
                this.ae = false;
            }
        }
        if ((this.af === 'hepsi' || this.af === 'dip') && this.ae) {
            this.bi = document.createElement('div');
            this.bi.setAttribute('style', 'position:absolute;height:40px;z-index:2147483647;width:100%');
            this.bi.style.backgroundColor = this.ai;
            this.bi.style.color = this.aj;
            this.bi.style.position = 'fixed';
            this.bi.style.left = 0;
            this.bi.style.zIndex = '99980';
            this.bi.style.bottom = 0;
            this.bj = document.createElement('a');
            this.bj.href = 'tel:' + numapaPaneli_tel;
            this.bi.appendChild(this.bj);
            this.bk = document.createElement('div');
            this.bk.style.height = 40 + 'px';
            this.bk.style.maxWidth = 800 + 'px';
            this.bk.style.width = 100 + '%';
            this.bk.style.margin = '0 auto';
            this.bj.appendChild(this.bk);
            this.bl = document.createElement('div');
            this.bl.style.width = 50 + '%';
            this.bl.style.zIndex = "9999";
            this.bl.style.position = "absolute";
            this.bl.style.backgroundColor = "rgba(0,0,0,0.2)";
            this.bl.style.height = 100 + '%';
            this.bl.style.cssFloat = 'left';
            this.bl.style.margin = '0px 0px';
            this.bk.appendChild(this.bl);
            this.vc = document.createElement('div');
            this.vc.style.height = 100 + '%';
            this.vc.style.width = 128 + 'px';
            this.vc.style.marginLeft = 60 + 'px';
            this.vc.innerHTML = numaratel;
            this.bm = document.createElement('img');
            this.bm.style.width = 60 + 'px';
            this.bm.style.position = 'absolute';
            this.bm.style.top = '-85px';
            this.bm.style.height = 125 + 'px';
            this.bm.src = this.ak;
            this.bl.appendChild(this.bm);
            this.bl.appendChild(this.vc);
            this.bn = document.createElement('div');
            this.bn.setAttribute('style', 'width:50%;float:right;');
            this.bn.width = 100 + '%';
            this.bk.appendChild(this.bn);
            this.bo = document.createElement('marquee');
            this.bo.setAttribute('style', 'font-family:Segoe,"Segoe UI","DejaVu Sans","Trebuchet MS",Verdana,sans-serif;font-weight:400;font-size:15px;margin-top:12px');
            this.bo.innerHTML = this.ah;
            this.bo.style.color = this.aj;
            this.bo.setAttribute('SCROLLAMOUNT', this.al);
            if (this.am === 'saga') {
                this.bo.setAttribute('DIRECTION', 'right');
            }
            this.bn.appendChild(this.bo);
            document.body.appendChild(this.bi);
        }
        if ((this.af === 'hepsi' || this.af === 'pencere') && this.ae) {
            this.bp(this);
            this.bq(this);
        }
    };
    numaraPaneli.prototype.bp = function (br) {
        "use strict";
        this.bs(window, "resize", function resize() {
            if (typeof br.bt === 'undefined') {
            } else {
                br.ac = window.innerWidth;
                br.ad = window.innerHeight;
                br.bt.style.width = br.ac + 'px';
                br.bt.style.height = br.ad + 'px';
                br.bu = 400;
                if (br.ac <= 420) {
                    br.bu = br.ac - 20;
                }
                br.bv.style.width = br.bu + 'px;';
                br.bv.style.left = (br.ac - br.bu) / 2 + 'px';
                br.bv.style.right = (br.ac - br.bu) / 2 + 'px';
                br.bv.style.top = (br.ad - 200) / 2 + 'px';
            }
        });
    };
    numaraPaneli.prototype.bq = function (br) {
        "use strict";
        this.bg = Math.floor(Math.random() * (this.ba - this.az + 1)) + this.az;
        setTimeout(function () {
            if (br.ay === 0 || br.ay > br.aa) {
                if (br.bc) {
                    navigator.vibrate(10000);
                }
                if (br.bb) {
                    br.bw = document.createElement('audio');
                    br.bw.src = numapaPaneli_ses;
                    br.bw.setAttribute('controls', 'none');
                    br.bw.style.display = 'none';
                    br.bw.currentPosition = 0;
                    document.body.appendChild(br.bw);
                    br.bw.play();
                }
                br.ac = window.innerWidth;
                br.ad = window.innerHeight;
                br.aa++;
                br.bt = document.createElement('div');
                br.bt.setAttribute('style', 'width:' + br.ac + 'px;height:' + br.ad + 'px');
                br.bt.style.left = 0;
                br.bt.style.top = 0;
                br.bt.style.position = 'fixed';
                br.bt.style.zIndex = '99990';
                br.bt.style.backgroundColor = br.bd;
                br.bt.style.opacity = '' + br.be / 100;
                document.body.appendChild(br.bt);
                br.bu = 400;
                if (br.ac <= 420) {
                    br.bu = br.ac - 20;
                }
                br.bv = document.createElement('div');
                br.bv.style.left = (br.ac - br.bu) / 2 + 'px';
                br.bv.style.right = (br.ac - br.bu) / 2 + 'px';
                br.bv.style.top = (br.ad - 200) / 2 + 'px';
                br.bv.style.maxWidth = 400 + 'px';
                br.bv.style.position = 'fixed';
                br.bv.style.zIndex = '99999';
                br.bv.style.backgroundColor = '#FFFFFF';
                br.bv.style.border = '1px solid' + pencere_baslik_arkaplan_renk ;
                br.bx = document.createElement('div');
                br.bx.setAttribute('style', 'width:100%;height:' + 30 + 'px');
                br.bx.style.backgroundColor = br.ap;
                br.bv.appendChild(br.bx);
                br.by = document.createElement('div');
                br.by.setAttribute('style', 'font-family:Segoe,"Segoe UI","DejaVu Sans","Trebuchet MS",Verdana,sans-serif;font-weight:bold;font-size:18px;width:90%;height:' + 50 + 'px');
                br.by.style.paddingLeft = 5 + '%';
                br.by.style.paddingTop = 2 + 'px';
                br.by.style.color = br.ao;
                br.by.innerHTML = br.st;

                br.bx.appendChild(br.by);
                br.bz = {
                    ca: br.aw[Math.floor(Math.random() * br.bh)].resim,
                    cb: br.aw[Math.floor(Math.random() * br.bh)].metin
                };
                if (!br.ax) {
                    if (br.ab < br.bh) {
                        br.bz = {ca: br.aw[br.ab].resim, cb: br.aw[br.ab].metin};
                        br.ab++;
                        if (br.ab >= br.bh) {
                            br.ab = 0;
                        }
                    }
                }
                br.bv.appendChild(br.cc(br.bz));
                br.cd = document.createElement('div');
                br.cd.width = 100 + '%';
                br.cd.style.paddingBottom = 1 + 'px';
                br.cd.style.paddingTop = 1 + 'px';
                br.cd.style.textAlign = 'right';

                br.cd.style.borderTop = "1px solid" + pencere_baslik_arkaplan_renk;

                br.bv.appendChild(br.cd);
                br.ce = document.createElement('a');
                br.ce.setAttribute('style', 'font-family:Segoe,"Segoe UI","DejaVu Sans","Trebuchet MS",Verdana,sans-serif;font-weight:bold;font-size:15px;width:100%;line-height:50px;height:' + 50 + 'px');
                br.ce.href = 'javascript:void();';
                br.ce.width = 100 + 'px';
                br.ce.style.textDecoration = 'none';
                br.ce.style.cursor = 'pointer';
                br.ce.style.color = br.au;
                br.ce.style.marginRight = 14 + 'px';
                br.ce.style.backgroundColor = br.av;
                br.ce.style.paddingTop = 6 + 'px';
                br.ce.style.paddingBottom = 6 + 'px';
                br.ce.style.paddingLeft = 10 + 'px';
                br.ce.style.paddingRight = 10 + 'px';
                br.ce.style.border = 'solid 1px ' + br.au;
                br.ce.innerHTML = br.at;
                br.ce.addEventListener("click", function () {
                    document.body.removeChild(br.bt);
                    document.body.removeChild(br.bv);
                    br.bq(br);
                    return false;
                });
                br.cd.appendChild(br.ce);
                br.cf = document.createElement('a');
                br.cf.setAttribute('style', 'font-family:Segoe,"Segoe UI","DejaVu Sans","Trebuchet MS",Verdana,sans-serif;font-weight:bold;font-size:15px;width:100%;height:' + 30 + 'px');
                br.cf.href = 'tel:' + numapaPaneli_tel;
                br.cf.width = 100 + 'px';
                br.cf.style.textDecoration = 'none';
                br.cf.style.cursor = 'pointer';
                br.cf.style.color = br.ar;
                br.cf.style.marginRight = 14 + 'px';
                br.cf.style.backgroundColor = br.as;
                br.cf.style.paddingTop = 6 + 'px';
                br.cf.style.paddingBottom = 6 + 'px';
                br.cf.style.paddingLeft = 10 + 'px';
                br.cf.style.paddingRight = 10 + 'px';
                br.cf.style.border = 'solid 1px #de91b3';
                br.cf.innerHTML = br.aq;
                br.cd.appendChild(br.cf);
                document.body.appendChild(br.bv);
            }
        }, br.bg);
    };
    numaraPaneli.prototype.cc = function (bz) {
        "use strict";
        this.cg = document.createElement('div');
        this.cg.style.borderBottom = 'solid 1px #CCCCCC';
        this.cg.style.minHeight = 100 + 'px';
        this.ch = document.createElement('div');
        this.ch.style.width = 80 + 'px';
        this.ch.style.height = 80 + 'px';
        this.ch.style.cssFloat = 'left';
        this.ch.style.margin = '10px 10px';
        this.ch.style.background = "url('" + bz.ca + "') no-repeat center center";
        this.ch.style.backgroundSize = 'cover';
        this.cg.appendChild(this.ch);
        this.ci = document.createElement('img');
        this.ci.style.width = 30 + 'px';
        this.ci.style.marginTop = 50 + 'px';
        this.ci.style.marginLeft = 50 + 'px';
        this.ci.style.height = 30 + 'px';
        this.ci.src = numapaPaneli_telefon;
        this.ch.appendChild(this.ci);
        this.cj = document.createElement('div');
        this.cj.setAttribute('style', 'font-family:Segoe,"Segoe UI","DejaVu Sans","Trebuchet MS",Verdana,sans-serif;font-weight:700;font-size:18px;margin-left:120px;color:black;');
        this.cj.width = 100 + '%';
        this.cj.innerHTML = bz.cb;
        this.cj.style.padding = 10 + 'px';
        this.cg.appendChild(this.cj);
        return this.cg;
    };
    numaraPaneli.prototype.bs = function (ck, cl, cm) {
        "use strict";
        if (ck === null || typeof(ck) === 'undefined') {
            return;
        }
        if (ck.addEventListener) {
            ck.addEventListener(cl, cm, false);
        } else if (ck.attachEvent) {
            ck.attachEvent("on" + cl, cm);
        } else {
            ck["on" + cl] = cm;
        }
    };

    var ayarlar = {
        tipi: 'tumu',
        masaustu: true,
        pencere_icerik: [
            {
                metin: ayarlar_metin1,
                resim: numapaPaneli_adres + 'https://3.bp.blogspot.com/-X5k-mrj59Gs/WpUog9sgLSI/AAAAAAAAAJ8/AmZ_7I5Mp9ksjPlK35NRXVSjQumvIIo8ACLcBGAs/s1600/milf.jpg'
            },
            {
                metin: ayarlar_metin2,
                resim: numapaPaneli_adres + 'https://2.bp.blogspot.com/-3SMYWllCeZ0/WpUoSkMhukI/AAAAAAAAAJ0/bBdnPB0svCYX1ypfWT1Xp0uNC1edB-AuACLcBGAs/s1600/milf2.jpg'
            },
            {
                metin: ayarlar_metin3,
                resim: numapaPaneli_adres + 'https://2.bp.blogspot.com/-lHoftCVF_KQ/WpUn9hydsLI/AAAAAAAAAJw/R7DTSSDisSMSyNJRqiGrlbbFc6T7n4NMwCLcBGAs/s1600/milf3.jpg'
            }

        ],
        pencere_icerik_rastgele: pencere_icerik_rastgele,
        pencere_baslik_metin: pencere_baslik_metin,
        pencere_icon: pencere_icon,
        pencere_ara_buton_metin: pencere_ara_buton_metin,
        pencere_reddet_buton_metin: pencere_reddet_buton_metin,
        pencere_kac_kez: pencere_kac_kez,
        pencere_en_erken: pencere_en_erken,
        pencere_en_gec: pencere_en_gec,
        pencere_ara_buton_arka_renk: pencere_ara_buton_arka_renk,
        pencere_baslik_arkaplan_renk: pencere_baslik_arkaplan_renk,
        dip_arka_renk: dip_arka_renk
    };
    document.addEventListener("DOMContentLoaded", function (event) {
        new numaraPaneli(ayarlar);
    });
}
