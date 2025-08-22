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
}

console.log(localStorage.getItem("lang"))

button.addEventListener("click", () => {
    localStorage.setItem("count", Number(localStorage.getItem("count")) + 1)

    if(localStorage.getItem("lang") == "ru"){
        countDeath.innerHTML = "Убитые тобой вайбкодеры: " + localStorage.getItem("count")
    }if(localStorage.getItem("lang") == "eng"){
        countDeath.innerHTML = "Killed by you vibecoders: " + localStorage.getItem("count")
    }
})

changeLang.addEventListener("click", () => {
    if(localStorage.getItem("lang") == "ru"){
        localStorage.setItem("lang", "eng")
        console.log("sosal")
    }else{
        if(localStorage.getItem("lang") == "eng"){
            localStorage.setItem("lang", "ru")
        }
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
    p7.textContent = "Что бы стать членом этого движения, вам надо перестать изпользовать нейросети(Chat GPT, deepseek, complexity etc.) впринципе это и так понятно(в идеале подписаться на телеграмм канал).";
    p8.textContent = "Сей позиция основовается на том что изпользование внешних вспомагательных инструментов, в частности нейросетей, влияет на мозг следуищим образом. Когда человек долго не изпользует собственные ресурсы, то органзим со временем привыкает к этому И(!) начинает тратить меньше сил сам по себе на эту работу, тобишь как бы \"атрифируеца\".";
    p9.textContent = "Не учитывая этого сами по себе нейросети могут галлюцинировать, частыми становятся случаи когда нейросеть пишет не то что 'ДЕРЬМОВЫЙ' код, но и вцелом неправильный.";
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
if(localStorage.getItem("lang") == "eng"){
    p1.textContent = "Attention dear vibcoders! I urge you to isolate yourself from society once and for all!";
    p2.textContent = "But you can still become normal members of society if you give up neural networks!";
    p3.textContent = "All other normal people should read the following text, and preferably even if they belong to different groups.";
    p4.textContent = "Vibecoding in the general sense can be defined not just as the use of neural networks, but the use of in general, any educational resources, such as friends, mentors, etc.";
    p5.textContent = "Also, the prefix \"vib\" can be used not only in the case of programming, but with any sphere of mental (creative)";
    p6.textContent = "The anti-Vibcoding movement considers the use of neural networks to create software (software) as unacceptable as possible, and in the context of vibcoding.";
    p7.textContent = "To become a member of this movement, you need to stop using neural networks (Chat GPT, deepseek, complexity, etc.) in principle, this is understandable (ideally subscribe to the telegram channel).";
    p8.textContent = "This position is based on the fact that the use of external cognitive tools, in particular neural networks, affects the brain in the following way. When a person does not use their own resources for a long time, the organzim gets used to it over time and (!) begins to spend less effort on this work by itself, you feel like a \"atrifier\".";
    p9.textContent = "Without taking this into account, neural networks themselves can hallucinate, there are frequent cases when the neural network writes not only 'CRAPPY' code, but also completely wrong.";
    p10.textContent = "Of course, all programmers and people in such fields in general cannot know everything, and therefore they need to get additional information from somewhere, in our case, for example, stackoverflow, or Google with YouTube.";
    p11.textContent = "And in general this is considered normal, according to the above-mentioned the reason. BUT when a person starts using it too often, it becomes a problem.";
    p12.textContent = "And it's not just about programming anymore, but in general, when a person starts communicating with neural networks as with real people, yes, anything can happen, but deceiving yourself is the last thing to do, even in the most difficult situations.";
    p13.textContent = "Neural networks get smarter over time, which is always a good thing. The problem is with people who can't control their desires and aren't ready to think for themselves.";
    p14.textContent = "Because of this, beginners suffer, who initially turn to neural networks for help, and eventually get used to it, and they can't do anything themselves.";
    p15.textContent = "One hundred percent vibcoders are dummies, they can't do anything but promts, and you shouldn't go to extremes, as mentioned above, everything has its own measure.";
    p16.textContent = "It is worth maintaining a so-called balance, approximately 95% by 5%. Depending on the complexity of the task, maybe 5% can turn into 10%, but it depends on the person.";
    p17.textContent = "BTV is a general definition of \"vibe\", it can be applied from programming to psychilogy, while all its tactics remain approximately the same.";
    p18.textContent = "Kill one vibecoder with this button to clear the world";
}