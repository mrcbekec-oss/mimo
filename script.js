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
  ],
  tuniii: [
    'Tuna ne yapıyorsun?', 'Küstün mü bana?', 'Sen biraz değişiksin.', 'Süren doldu mu?',
    'Tuna, orada mısın?', 'Bugün nasılsın?', 'Beni duyuyor musun?', 'Neden sessiz kaldın?',
    'Bir şey mi oldu?', 'Şu an ne düşünüyorsun?', 'Yine mi kayboldun?', 'Bana kızdın mı?',
    'Tuna, müsait misin?', 'Ne yapıyorsun bakalım?', 'Bugün keyfin yerinde mi?', 'Beni özledin mi?',
    'Niye cevap vermiyorsun?', 'Bir planın mı var?', 'Tuna, iyi misin?', 'Nereye gittin?',
    'Senin aklından ne geçiyor?', 'Bana bir şey söyleyecek misin?', 'Şimdi konuşabilir miyiz?', 'Uykun mu geldi?',
    'Yine dalıp gittin galiba.', 'Seni bekliyorum, haberin olsun.', 'Tuna, sesin çıkmıyor.', 'Biraz garip davranıyorsun.',
    'Bugün neden böylesin?', 'Benden sakladığın bir şey mi var?', 'Yoksa beni mi görmezden geliyorsun?', 'Hâlâ orada mısın?',
    'Tuna, cevap hakkın dolmadı.', 'Bana darıldın mı?', 'Niye böyle uzak duruyorsun?', 'Seninle konuşmak zorlaştı.',
    'Bir kahve molası mı verdin?', 'Şu an gülüyor musun?', 'Tuna, aklına geldim mi?', 'Bugün beni merak ettin mi?',
    'Sana bir soru sorabilir miyim?', 'Cevap vermeden kaçma.', 'Tuna, beni şaşırtıyorsun.', 'Neden bu kadar gizemlisin?',
    'Bir yere mi yetişiyorsun?', 'Dersin mi var?', 'Oyun mu oynuyorsun?', 'Telefonun yanında mı?',
    'Şu an meşgul müsün?', 'Biraz sohbet edelim mi?', 'Tuna, bana bakar mısın?', 'Bunu bilerek mi yapıyorsun?',
    'Aramızda bir sorun mu var?', 'Bugün seni anlamak zor.', 'Biraz kendine geldin mi?', 'Tuna, yine ne planlıyorsun?',
    'Bu sessizlik neyin nesi?', 'Senden haber bekliyorum.', 'Beni merakta bırakma.', 'Birazdan dönecek misin?',
    'Tuna, müsait olunca yaz.', 'Sana kızamıyorum ki.', 'Bu kadar tatlı susma.', 'Beni ciddiye alıyor musun?',
    'Sen hep böyle misin?', 'Biraz normal davranır mısın?', 'Beni duymazdan gelme.', 'Bugün enerjin nereye gitti?',
    'Tuna, sende bir tuhaflık var.', 'Şaka yapıyorsun, değil mi?', 'Bana karşı dürüst ol.', 'Yoruldun mu?',
    'Kafanı ne meşgul ediyor?', 'Bir şey anlatmak ister misin?', 'Seninle barışalım mı?', 'Küstüysen söyle.',
    'Tuna, aramız düzeldi mi?', 'Beni bekletmeyi seviyorsun galiba.', 'Neden hep son anda geliyorsun?', 'Biraz konuşsak iyi olur.',
    'Tuna, bugün nasılsın gerçekten?', 'Bana ayıracak iki dakikan var mı?', 'Süreni mi kontrol ediyorsun?', 'Zamanın mı kalmadı?',
    'Tuna, bu kadar sessizlik yeter.', 'Nerelerdeydin?', 'Beni meraklandırdın.', 'Senin haberin var mı?',
    'Böyle gizemli olmak zorunda mısın?', 'Bir cevap bekliyorum.', 'Bana el sallar mısın?', 'Tuna, göz kırpıyor musun?',
    'Bugün biraz değişik görünüyorsun.', 'Sana yetişemiyorum.', 'Bana kızgın değilsin, değil mi?', 'Beni duyduğunu biliyorum.',
    'Tuna, son kez soruyorum: iyi misin?', 'Tamam, hazır olunca konuşuruz.', 'Bir dakika ayırır mısın?', 'Tuna, cevap sırası sende.'
  ]
};

const buttons = document.querySelectorAll('.mode-card');
const responseText = document.querySelector('#response-text');
const responseIndexes = { game: 0, study: 0, break: 0, tuniii: 0 };
const quiz = document.querySelector('#quiz');
const quizForm = document.querySelector('#quiz-form');
const quizQuestions = document.querySelector('#quiz-questions');
const quizResult = document.querySelector('#quiz-result');
const streakCount = document.querySelector('#streak-count');
const dailyQuizzes = [
  [
    ['Bence nasıl bir arkadaş?', ['Düşünceli', 'Sessiz', 'Meraklı', 'Aceleci'], 'a'],
    ['En iyi çalışma yöntemi hangisi?', ['Ertelemek', 'Vazgeçmek', 'Düzenli çalışmak', 'Rastgele ilerlemek'], 'c'],
    ['Zor bir soruda ne yapmalısın?', ['Boş bırakmalısın', 'Kızmalısın', 'Sakin düşünüp denemelisin', 'Hemen bırakmalısın'], 'c'],
    ['Başarı için hangisi önemlidir?', ['Şans', 'Acele', 'Bahane', 'Emek'], 'd'],
    ['Test bitince ne yapmalısın?', ['Cevaplarını kontrol etmelisin', 'Hiç bakmamalısın', 'Soruları unutmalısın', 'Sonucu değerlendirmelisin'], 'd']
  ],
  [
    ['Bir hedefe ulaşmanın ilk adımı nedir?', ['Hiç başlamamak', 'Plan yapmak', 'Şikâyet etmek', 'Beklemek'], 'b'],
    ['Yeni bir bilgi öğrenirken ne işe yarar?', ['Tekrar etmek', 'Dikkat dağıtmak', 'Acele etmek', 'Vazgeçmek'], 'a'],
    ['Arkadaşın üzgünse ne yaparsın?', ['Dinlersin', 'Görmezden gelirsin', 'Kızarsın', 'Konuyu değiştirirsin'], 'a'],
    ['Bir hata yaptığında en iyi yaklaşım hangisi?', ['Ders çıkarmak', 'Saklamak', 'Pes etmek', 'Suçlamak'], 'a'],
    ['Günün sonunda neyi fark etmek güzeldir?', ['İlerlemeni', 'Eksiklerini büyütmeyi', 'Zamanı boşa harcamayı', 'Bahane bulmayı'], 'a']
  ],
  [
    ['Odaklanmak için ne yapabilirsin?', ['Bildirimleri kapatmak', 'Her şeyi aynı anda yapmak', 'Sık sık bölünmek', 'Ertelemek'], 'a'],
    ['İyi bir ekipte hangisi bulunur?', ['Yardımlaşma', 'Sessizlik', 'Rekabet', 'Bahane'], 'a'],
    ['Kısa bir molanın amacı nedir?', ['Enerji toplamak', 'Daha çok yorulmak', 'İşi bırakmak', 'Zaman kaybetmek'], 'a'],
    ['Zor bir konu karşısında ne yapmalısın?', ['Parçalara ayırmak', 'Hemen vazgeçmek', 'Tahmin etmek', 'Kaçmak'], 'a'],
    ['Kendine güvenmek ne sağlar?', ['Denemeye cesaret verir', 'Hiç hata yaptırmaz', 'Her şeyi kolaylaştırır', 'Çalışmayı gereksiz kılar'], 'a']
  ]
];
let answerKey = [];
let responseTimer;

function todayKey() {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
}

function renderDailyQuiz() {
  const today = new Date();
  const localDayNumber = Math.floor(new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime() / 86400000);
  const dayIndex = localDayNumber % dailyQuizzes.length;
  const questions = dailyQuizzes[dayIndex];
  answerKey = questions.map((question) => question[2]);
  quizQuestions.innerHTML = questions.map(([question, choices], index) => `
    <div class="quiz-question">
      <strong>${index + 1}. ${question}</strong>
      ${choices.map((choice, choiceIndex) => `<label><input type="radio" name="question-${index + 1}" value="${String.fromCharCode(97 + choiceIndex)}"> ${String.fromCharCode(65 + choiceIndex)}) ${choice}</label>`).join('')}
    </div>
  `).join('');
  const saved = JSON.parse(localStorage.getItem('mimo-streak') || '{}');
  streakCount.textContent = `${saved.count || 0} gün seri`;
}

function updateStreak() {
  const today = todayKey();
  const saved = JSON.parse(localStorage.getItem('mimo-streak') || '{}');
  if (saved.lastDate === today) return saved.count || 1;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const count = saved.lastDate === `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}` ? (saved.count || 0) + 1 : 1;
  localStorage.setItem('mimo-streak', JSON.stringify({ lastDate: today, count }));
  streakCount.textContent = `${count} gün seri`;
  return count;
}

renderDailyQuiz();

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
    clearTimeout(responseTimer);
    responseText.classList.remove('response-pop');
    void responseText.offsetWidth;
    quiz.hidden = button.dataset.mode !== 'tuniii';
    quizResult.textContent = '';
    if (button.dataset.mode !== 'tuniii') quizForm.reset();

    if (button.dataset.mode === 'tuniii') {
      responseText.textContent = '...';
      responseTimer = setTimeout(() => {
        responseText.textContent = chooseResponse(button.dataset.mode);
        responseText.classList.add('response-pop');
      }, 3000);
      return;
    }

    responseText.textContent = chooseResponse(button.dataset.mode);
    responseText.classList.add('response-pop');
  });
});

quizForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const answers = answerKey.map((_, index) => quizForm.elements[`question-${index + 1}`].value);
  if (answers.some((answer) => !answer)) {
    quizResult.textContent = 'Devam etmek için tüm soruları cevapla.';
    return;
  }
  const score = answers.reduce((total, answer, index) => total + (answer === answerKey[index] ? 1 : 0), 0);
  updateStreak();
  quizResult.textContent = `${score}/5 doğru! Bugünkü test tamamlandı, seri devam ediyor.`;
});
