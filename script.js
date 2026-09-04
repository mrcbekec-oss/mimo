const responses = {
  game: [
    'Standoff 2 oynayalım mı?', 'Helal sana!', 'Hadi başarılar!',
    'Bugün hedefin kaç galibiyet?', 'Takım hazır, başlayalım!', 'Nişanına güveniyorum.',
    'Harika bir raund olsun!', 'Stratejini konuştur.', 'Rakipler seni bekliyor.',
    'Sakin kal, oyunu sen yönet.', 'İlk elden güzel başladın.', 'Eğlence başlasın!',
    'Takım arkadaşlarına güven.', 'Bugün reflekslerin çok iyi.', 'Bir sonraki raund senin.',
    'Kazanmak için hazırsın.', 'Kısa bir maç iyi gider.', 'Hadi oyun moduna geçelim.',
    'Bugün şans senden yana.', 'Mükemmel hamle zamanı.', 'Haritayı iyi kontrol et.',
    'Takımın senden güç alıyor.', 'Odaklan ve eğlen.', 'Bu maç çok güzel olacak.',
    'Başarılar, MVP sensin!', 'Eller ısındı, devam!', 'Rakibi şaşırtmaya hazır mısın?',
    'Planın varsa uygula.', 'Her el yeni bir fırsat.', 'Eğlenmek en önemli görev.',
    'Hadi ilk raundu alalım.', 'Bugün oyun enerjin yüksek.', 'Güzel bir galibiyet seni bekliyor.',
    'Taktik zamanı!', 'Kendine inan, başaracaksın.', 'Takım ruhunu göster.',
    'Birlikte güzel oynayalım.', 'Hedef belli: eğlenmek!', 'Bu maçta fark yarat.',
    'Reflekslerine güven.', 'Hadi skor tabelasını değiştirelim.', 'Konsantrasyonunu koru.',
    'Oyun başlıyor, hazır ol.', 'Her hamlen önemli.', 'Kazanırsan kutlama yaparız.',
    'Bugün iyi bir oyuncusun.', 'Raund senin kontrolünde.', 'Hadi keyifli oyunlar!',
    'Ekran başına, macera başlıyor.', 'En iyi hamleni şimdi yap.'
  ],
  study: [
    'Hadi başarılar!', 'Bence akıllısın.', 'Aferin, doğru yoldasın!',
    'Bugün küçük bir adım bile çok değerli.', 'Dikkatini toplarsan başarabilirsin.', 'Konuyu parçalara ayır ve başla.',
    'Zor görünse de üstesinden geleceksin.', 'Çaban gerçekten fark yaratıyor.', 'Kendine güven, bunu öğrenebilirsin.',
    'Önce en kolay sorudan başlayabilirsin.', 'Her dakika seni hedefine yaklaştırıyor.', 'Notlarını düzenlemek iyi bir fikir.',
    'Bir soruyu çözmek bile ilerlemedir.', 'Sabırlı ol, bilgiler yerine oturacak.', 'Bugünkü emeğin yarın işine yarayacak.',
    'Ders çalışırken kendine inan.', 'Harika gidiyorsun, devam et.', 'Kısa bir hedef belirleyip başlayalım.',
    'Anlamadığın yeri tekrar incele.', 'Sen düşündüğünden daha güçlüsün.', 'Odaklanma zamanı geldi.',
    'Çalışma masan başarıya açılan kapı.', 'Birlikte güzel bir konu bitirebiliriz.', 'Bugün öğrenmek için güzel bir gün.',
    'Acele etme, anlayarak ilerle.', 'Başlamak işin yarısıdır.', 'Çözdüğün her soru seni geliştiriyor.',
    'Düzenli çalışman çok etkili.', 'Zihnin öğrenmeye hazır.', 'Kendine kısa ve net bir hedef koy.',
    'Başarının anahtarı devam etmek.', 'Yanlışlar öğrenmenin bir parçası.', 'Güzel bir odak turu yapalım.',
    'Kitabını açmak için en iyi an şimdi.', 'Senin yapabileceğine inanıyorum.', 'Bilgi biriktirdikçe güçleniyorsun.',
    'Bugün dünden daha ileridesin.', 'Biraz daha gayret, sonuca çok yakınsın.', 'Sorular gözünü korkutmasın.',
    'Çalışma ritmini buldun.', 'Hedefine adım adım gidiyorsun.', 'Aferin, pes etmediğin için.',
    'Dersini bitirince güzel bir mola hak ediyorsun.', 'Sakin çalış, güzel sonuçlar gelecek.', 'Zamanını iyi kullanıyorsun.',
    'Bugün kendinle gurur duyabilirsin.', 'Birlikte odaklanmaya devam.', 'Başarı emek verenleri sever.',
    'Bir sayfa daha oku, çok iyi gidiyorsun.', 'Çalışkanlığın seni ileri taşıyacak.'
  ],
  break: [
    'Çay kahve iç.',
    'Arkadaşınla oyun oyna.',
    'Biraz spora ne dersin?',
    'Harika bir çalışma temposuydu! Dinlenmeyi fazlasıyla hak ettin. Ben buradayım, hazır olduğunda devam ederiz.',
    'Dinlenme zamanı! Sen biraz soluklan, zihnini topla. Geldiğinde kaldığımız yerden tam gaz devam ederiz.',
    'Gözlerini biraz dinlendir.', 'Derin bir nefes al, acele etme.', 'Kendine güzel bir mola hediye et.',
    'Pencereden dışarı bakıp biraz rahatla.', 'Su içmeyi unutma.', 'Müzik açıp keyif yapabilirsin.',
    'Bugün çok emek verdin.', 'Zihnin de dinlenmeyi hak ediyor.', 'Biraz yürüyüş iyi gelebilir.',
    'Telefonu bırakıp birkaç dakika sessiz kal.', 'Rahat bir nefes, taze bir başlangıçtır.', 'Kendini dinleme zamanı.',
    'Sevdiğin bir şarkıyı aç.', 'Esneme hareketleri yapmaya ne dersin?', 'Bir bardak su içip yenilen.',
    'Molanın tadını çıkar.', 'Dışarı çıkıp temiz hava alabilirsin.', 'Kısa bir sohbet sana iyi gelebilir.',
    'Bugünkü emeğin için kendini tebrik et.', 'Rahatla, her şey yolunda.', 'Biraz gülümsemek iyi gelir.',
    'Atıştırmalık bir şeyler yiyebilirsin.', 'Gözlerini kapatıp on’a kadar say.', 'Omuzlarını gevşet.',
    'Kısa bir yürüyüş enerjini tazeler.', 'İstersen biraz resim yap.', 'Arkadaşına mesaj atabilirsin.',
    'Kendine nazik davran.', 'Mola, yeniden güç toplama zamanıdır.', 'Biraz dans etmeye ne dersin?',
    'Çalışma alanını havalandır.', 'En sevdiğin içeceği hazırlayabilirsin.', 'Bugün elinden geleni yaptın.',
    'Biraz temiz hava ve güneş iyi gelir.', 'Dinlenirken suçluluk hissetme.', 'Zihnini boşaltmak için müzik dinle.',
    'Kısa bir göz molası ver.', 'Biraz uzanıp rahatlayabilirsin.', 'Kendine vakit ayırman çok değerli.',
    'Yeni enerjiyle geri döneceksin.', 'Hafif bir egzersiz deneyebilirsin.', 'Mola planın çok iyi.',
    'Biraz sohbet, biraz neşe.', 'Bugün kendin için güzel bir şey yap.', 'Rahatla ve anın keyfini çıkar.',
    'Hazır olduğunda kaldığımız yerden devam ederiz.', 'Molan sana iyi gelsin.'
  ]
};

const buttons = document.querySelectorAll('.mode-card');
const responseText = document.querySelector('#response-text');
const responseIndexes = { game: 0, study: 0, break: 0 };

function chooseResponse(mode) {
  const messages = responses[mode];
  const message = messages[responseIndexes[mode]];
  responseIndexes[mode] = (responseIndexes[mode] + 1) % messages.length;
  return message;
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    responseText.classList.remove('response-pop');
    void responseText.offsetWidth;
    responseText.textContent = chooseResponse(button.dataset.mode);
    responseText.classList.add('response-pop');
  });
});
