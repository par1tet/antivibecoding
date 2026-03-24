let button = document.querySelector("#kill")
let countDeath = document.querySelector("#count")
let changeLang = document.querySelector(".changeLang button")

if(localStorage.getItem("lang") == null){
    localStorage.setItem("lang", "eng")
}
if(localStorage.getItem("count") == null){
    localStorage.setItem("count", "0")
}

if(localStorage.getItem("lang") == "ru"){
    countDeath.innerHTML = "Убитые тобой вайбкодеры: " + localStorage.getItem("count")
    button.textContent = "Почистить мир"
}if(localStorage.getItem("lang") == "eng"){
    countDeath.innerHTML = "Killed by you vibecoders: " + localStorage.getItem("count")
    button.textContent = "Clean up the world"
}if(localStorage.getItem("lang") == "gr"){
    countDeath.innerHTML = "Σκοτωμένοι από εσένα vibecoders: " + localStorage.getItem("count")
    button.textContent = "Καθάρισε κόσμο"
}

console.log(localStorage.getItem("lang"))

button.addEventListener("click", () => {
    localStorage.setItem("count", Number(localStorage.getItem("count")) + 1)

    if(localStorage.getItem("lang") == "ru"){
        countDeath.innerHTML = "Убитые тобой вайбкодеры: " + localStorage.getItem("count")
    }if(localStorage.getItem("lang") == "eng"){
        countDeath.innerHTML = "Killed by you vibecoders: " + localStorage.getItem("count")
    }if(localStorage.getItem("lang") == "gr"){
        countDeath.innerHTML = "Σκοτωμένοι από εσένα vibecoders: " + localStorage.getItem("count")
    }
})

changeLang.addEventListener("click", () => {
    if(localStorage.getItem("lang") == "ru"){
        localStorage.setItem("lang", "eng")
        console.log("sosal")
    }else if(localStorage.getItem("lang") == "eng"){
        localStorage.setItem("lang", "gr")
    }else if(localStorage.getItem("lang") == "gr"){
        localStorage.setItem("lang", "ru")
    }

    location.reload(true)
})

// LANGUAGE PART

let p1 = document.querySelector("#p1")
let p2 = document.querySelector("#p2")
let p3 = document.querySelector("#p3")
let p4 = document.querySelector("#p4")
let p5 = document.querySelector("#p5")
let p6 = document.querySelector("#p6")
let p7 = document.querySelector("#p7")
let p8 = document.querySelector("#p8")
let p9 = document.querySelector("#p9")
let p10 = document.querySelector("#p10")
let p11 = document.querySelector("#p11")
let p12 = document.querySelector("#p12")
let p13 = document.querySelector("#p13")
let p14 = document.querySelector("#p14")
let p15 = document.querySelector("#p15")
let p16 = document.querySelector("#p16")
let p17 = document.querySelector("#p17")
let p18 = document.querySelector("#p18")

if(localStorage.getItem("lang") == "ru"){
    p1.textContent = "Внимание дорогие вайбкодеры! Призываю изолироваться от общества вам раз и навсегда!";
    p2.textContent = "Но вы все еще можете стать нормальными членами общества если откажетесь от нейросетей!";
    p3.textContent = "Всем остальным, нормальным людям следует прочитать нижеследуйщий текст, и желательно даже если принадлежите онным группам.";
    p4.textContent = "Вайбкодинг в общем понимании можно определить не просто как изпользование нейросетей, а изпользование вообще любых вспомагательных ресурсов, по типу друзей, менторов etc.";
    p5.textContent = "Также приставку \"вайб\" можно употреблять не только в случае в программирование, а с любой сферой умственной(творческой)";
    p6.textContent = "Антивайбкодерское движение считает максимально неприемлимым изпользование нейросетей для создания ПО(программного обеспечения), и в цвелом вайбкодинга.";
    p7.textContent = "Что бы стать членом этого движения, вам надо перестать изпользовать нейросети(ChatGPT, deepseek, perplexity, claude, etc.) впринципе это и так понятно(в идеале подписаться на телеграмм канал).";
    p8.textContent = "Данная позиция основовается на том что изпользование внешних вспомагательных инструментов, в частности нейросетей, влияет на мозг следуищим образом. Когда человек долго не изпользует собственные ресурсы, то органзим со временем привыкает к этому И(!) начинает тратить меньше сил сам по себе на эту работу, тобишь как бы \"атрифируеца\".";
    p9.textContent = 'Не учитывая этого сами по себе нейросети могут галлюцинировать, частыми становятся случаи когда нейросеть пишет не то что "ДЕРЬМОВЫЙ" код, но и вцелом неправильный.';
    p10.textContent = "Канечно же все программисты и в целом люди в подобных сферах не могут знать всего, и поэтому им нужно получать откуда-то дополнительную информацию, в нашем случае например stackoverflow, или гугл с ютубом.";
    p11.textContent = "И в целом это считается нормальным, по выше озвученной причине. НО когда человек начинае изпользовать это слишком часто, это становится проблемой.";
    p12.textContent = "И тут даже не только про программирование уже, а в целом, когда человек начинает общаться с нейросетями как с настоящими людьми, да канечно может быть всякое, но обманывать себя это последние что нужно предпринимать даже в самых сложных ситуациях";
    p13.textContent = "Со временем нейросети умнеют, что канечно же очень хорошо. Проблема в людях которые не могут сдерживать свои желания и не готовы думать сами.";
    p14.textContent = "Из-за этого страдают новички, которые в начале обращаются за помощью к нейросетям, и со временем привыкают к этому, и уже ничего сами не могут.";
    p15.textContent = "Стопроцентные вайбкодеры это пустышки, ничего кроме промтов не умеющией, канечно же впадать крайности не стоит, как и сказано выше всему своя мера.";
    p16.textContent = "Стоит содержать так называемый баланс, примерно 95% на 5%. В зависимости от сложности задачи канечно 5% может превратиться и в 10%, но это уже зависит от человека.";
    p17.textContent = "бтв такое общее определение \"вайб\", можно применять от программирование до психилогии, при этом все онные тейки остаются примерно такими же.";
    p18.textContent = "Убейте одного вайбкодера этой кнопкой, что бы очистить мир";
}
if(localStorage.getItem("lang") == "gr"){
    p1.textContent = "Προσοχή αγαπητοί vibecoders! Καλούμαι να απομονωθείτε από κοινωνία εσάς μια και καλή!";
    p2.textContent = "Αλλά εσείς ακόμα μπορείτε γίνετε κανονικά μέλη της κοινωνίας αν αρνηθείτε από τα νευρωνικά δίκτυα!";
    p3.textContent = "Όλοι άλλοι, κανονικοί ανθρώποι πρέπει διαβάσουν το παρακάτω κείμενο, και κατά προτίμηση ακόμα κι αν ανήκετε σε αυτές ομάδες.";
    p4.textContent = "Vibecoding σε γενική κατανόηση μπορεί να οριστεί όχι απλώς ως χρησιμοποίηση νευρωνικών δικτύων, αλλά χρησιμοποίηση οποιωνδήποτε βοηθητικών πόρων γενικά, τύπου φίλων, μεντόρων κ.λπ.";
    p5.textContent = "Επίσης πρόθεμα \"vibe\" μπορεί να χρησιμοποιηθεί όχι μόνο σε περίπτωση στον προγραμματισμό, αλλά με οποιαδήποτε σφαίρα νοητική(δημιουργική)";
    p6.textContent = "Αντι-vibecoding κίνημα θεωρεί μέγιστα απαράδεκτο χρησιμοποίηση νευρωνικών δικτύων για δημιουργία ΛΟ(λογισμικού), και vibecoding γενικά.";
    p7.textContent = "Για να γίνετε μέλος αυτού κινήματος, χρειάζεστε να σταματήσετε χρησιμοποιείτε νευρωνικά δίκτυα(ChatGPT, deepseek, perplexity, claude, κ.λπ.) γενικά αυτό είναι ήδη προφανές(ιδανικά εγγραφείτε στο κανάλι telegram).";
    p8.textContent = "Αυτή θέση βασίζεται στο ότι χρησιμοποίηση εξωτερικών βοηθητικών εργαλείων, ιδίως νευρωνικών δικτύων, επηρεάζει εγκέφαλο με ακόλουθο τρόπο. Όταν άνθρωπος για πολύ καιρό δεν χρησιμοποιεί δικούς ρεσόρς, οργανισμός με τον καιρό συνηθίζει σε αυτό ΚΑΙ(!) αρχίζει να ξοδεύει λιγότερες δυνάμεις μόνος του σε αυτή δουλειά, δηλαδή λέμε \"ατροφιέται\".";
    p9.textContent = "Χωρίς να υπολογίζουμε αυτό τα νευρωνικά δίκτυα μόνα τους μπορούν παραισθαίνουν, συχνά γίνονται περιπτώσεις όταν νευρωνικό δίκτυο γράφει όχι απλά \"ΣΚΑΤΕΝΙΟ\" κώδικα, αλλά γενικά λάθος.";
    p10.textContent = "Βέβαια όλοι προγραμματιστές και γενικά ανθρώποι σε παρόμοιες σφαίρες δεν μπορούν ξέρουν τα πάντα, και γι αυτό χρειάζονται παίρνουν από κάπου επιπλέον πληροφορία, στην περίπτωσή μας για παράδειγμα stackoverflow, ή google με youtube.";
    p11.textContent = "Και γενικά αυτό θεωρείται κανονικό, κατά παραπάνω ειπωμένη αιτία. ΑΛΛΑ όταν άνθρωπος αρχίζει χρησιμοποιεί αυτό πολύ συχνά, αυτό γίνεται πρόβλημα.";
    p12.textContent = "Και εδώ δεν είναι ακόμα μόνο για τον προγραμματισμό πια, αλλά γενικά, όταν άνθρωπος αρχίζει να επικοινωνεί με νευρωνικά δίκτυα σαν με αληθινούς ανθρώπους, ναι βέβαια μπορεί να γίνει οτιδήποτε, αλλά εξαπατάς τον εαυτό σου είναι το τελευταίο που χρειάζεται κάνεις ακόμα και στις πιο δύσκολες καταστάσεις";
    p13.textContent = "Με τον καιρό τα νευρωνικά δίκτυα έξυπναίνουν, πράγμα που βέβαια είναι πολύ καλό. Πρόβλημα στους ανθρώπους που δεν μπορούν συγκρατούν επιθυμίες τους και δεν είναι έτοιμοι σκέφτονται μόνοι.";
    p14.textContent = "Εξαιτίας αυτού υποφέρουν αρχάριοι, οι οποίοι στην αρχή στρέφονται για βοήθεια στα νευρωνικά δίκτυα, και με τον καιρό συνηθίζουν σε αυτό, και ήδη τίποτα μόνοι τους δεν μπορούν.";
    p15.textContent = "Εκατό τοις εκατό vibecoders είναι κούφιοι, δεν ξέρουν τίποτα εκτός από prompts, βέβαια πέφτουν σε ακρότητες δεν αξίζει, όπως και λέχθηκε παραπάνω σε όλα το μέτρο τους.";
    p16.textContent = "Πρέπει διατηρείτε λεγόμενη ισορροπία, περίπου 95% στο 5%. Ανάλογα με πολυπλοκότητα εργασίας βέβαια 5% μπορεί να μετατραπεί και σε 10%, αλλά αυτό ήδη εξαρτάται από άνθρωπο.";
    p17.textContent = "btw τέτοιος γενικός ορισμός \"vibe\", μπορεί να εφαρμόζεται από προγραμματισμό μέχρι ψυχολογία, ενώ όλα αυτά τα takes παραμένουν περίπου τα ίδια.";
    p18.textContent = "Σκοτώστε έναν vibecoder με αυτό κουμπί, για να καθαρίσετε κόσμο";
}
if(localStorage.getItem("lang") == "eng"){
    p1.textContent = "Attention dear vibecoders! I calling to isolate yourself from society once and for all!";
    p2.textContent = "But you still can become normal members of society if you refuse from neural networks!";
    p3.textContent = "All other, normal peoples should read the following text, and preferably even if you belong to those groups.";
    p4.textContent = "Vibecoding in general understanding can be defined not just as using of neural networks, but using of any helper resources at all, like friends, mentors etc.";
    p5.textContent = "Also the prefix \"vibe\" can be used not only in case in programming, but with any sphere of mental(creative)";
    p6.textContent = "Antivibecoding movement considers maximally unacceptable using of neural networks for creating software, and vibecoding in whole.";
    p7.textContent = "To become member of this movement, you need to stop using neural networks(ChatGPT, deepseek, perplexity, claude, etc.) in principle it is already obvious(ideally subscribe to telegram channel).";
    p8.textContent = "This position is based on that using of external helper tools, in particular neural networks, affects the brain in following way. When human for long time not using own resources, the organism over time gets used to this AND(!) starts to spend less efforts by itself on this work, meaning like \"atrophyes\".";
    p9.textContent = "Not counting this neural networks by itself can hallucinate, frequent are cases when neural network writes not just \"SHITTY\" code, but generally wrong one.";
    p10.textContent = "Of course all programmers and in general peoples in similar spheres cannot know everything, and therefore they need to get from somewhere additional information, in our case for example stackoverflow, or google with youtube.";
    p11.textContent = "And in general this is considered normal, by above voiced reason. BUT when human starts to use this too often, this becomes problem.";
    p12.textContent = "And here it is not even only about programming already, but in general, when human starts to communicate with neural networks like with real peoples, yes of course anything can happen, but deceiving yourself is the last thing you need to do even in most difficult situations";
    p13.textContent = "Over time neural networks become smarter, which of course is very good. Problem in peoples who cannot restrain their desires and not ready to think by themselves.";
    p14.textContent = "Because of this suffer beginners, who at start turn to neural networks for help, and over time gets used to this, and already cannot do anything by themselves.";
    p15.textContent = "Hundred percent vibecoders are dummies, not knowing nothing except prompts, of course falling into extremes is not worth it, as said above everything have its measure.";
    p16.textContent = "Should maintain so called balance, approximately 95% to 5%. Depending on complexity of task of course 5% can turn into 10%, but this already depends on person.";
    p17.textContent = "btw such general definition of \"vibe\", can be applied from programming to psychilogy, while all those takes remains approximately same.";
    p18.textContent = "Kill one vibecoder with this button, to clean up the world";
}