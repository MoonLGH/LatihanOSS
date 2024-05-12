
if you ever feel like wanting to kinda curhat but dont know how, just write it all out here rel, actually ill put it on the to

Hey farrel in the future you probably know why you make this file, correct, cause you need placeholder for TryOut folder, but anyways, how ways your day ?
also quick question, do you still like that girl that has her name started with "R" in a different religion ?
how was your day ?, oh shit i've asked that, also what do you even work now on ?, school project?
i or we really hope this problem here can be solved on our meetings with mrs wahyuni, or even i hope i in the future can solve this problem, cause belive me, i dont understand a single thing

Looking forward to seeing your solutions folder here

best regards
-Farrel in 2/18/2023

Yo, its been 3 days, and i think i dont how i feel anymore, while yes, you know shes obssesed with your friend, you still didnt get a confirmation whether she's has a boyfriend or na

best regards
- Farrel in 2/21/2023

i am a liar to myself, i still like her, but why, i dont even know, bro literally, i just want this to end, like just pick either stop having feeling and keep being friend, or just wish for miracle to come and cupid does something, well i tried to first one, and that doesnt work, i still fell no matter how hard i try, my heart beat so fast rn, you know why
if i had a chances to go back to where i started, i would just pick for me to not looking forward into a girl that has 100 redflag, or do a activity to learn more about a girl, i should've just known less, and stop my self for doing activity that makes me fell at the first place, even tho i dont even know
i would just, play games and code, and be nerd, but as wise man said "nasi telah menjadi bubur"

- 4/26/2023

MY GUY FARREL, STOP FKING TRYING, just surrender dude, she has a bf, I REPEAT, SHE HAS A BF, how could you surrender on that first girl but not this...
Bro the best surrender attemp of you is just stop going to her desk, EVEN THAT YOU ONLY SUCCESS FOR 1 DAYS,1 DAYS!!,
okay i dont know what i do anymore, this is impossible

best regards 
- Farrel 5/20/2023

HOW COULD YOU FALL BRO, HOWWWWWWWWWW, YOOU KNOW FOR A FACT THAT SHE HAS A BF, WANT MORE PROOF ? LOOK AT HER BF BIO, WHAT ITS CALLED, YOU WANT TO SEE IT AGAIN ? "R.."how does that felt reading that ?
you have answer your question from 2/21/2023, yes she had a BF
its not her fault to be friendly rel, BUT ITS YOUR FAULT TO FALL FOR IT, also
> Bro the best surrender attemp of you is just stop going to her desk, EVEN THAT YOU ONLY SUCCESS FOR 3 DAYS, 3 DAYS!!,
you still remember that thing ? ye you try it again, you sucess for 2 days, a progress, but you fucking throw it on the third day, and fall, deeper

IF ONLY I KNOW HOW TO NOT FALL FOR SOMEONE ELSES VOICES
- Farrel 6/3/2023



ITS ME, FARREL THAT HAS A CRUSH ON AYA, by the time you writing this, you fall for this girl, you fall so deep, you should've listen to lita dude, dont freaking fall, cause this girl friendly af, YOU SHOULD'VE KNOW IT>
ATM you writing this, lo lagi binggung, apa gw tetep suka aja ya, pesaing dia banyak banget tai, apa gw harus nyerah aja ya, gw juga ga mau sebenernya kejadian gini lagi, 
Surrender from 812 is a good thing rel, now the fucking problem is, i dont think falling for 0201 is a good thing
https://twitter.com/MoonLIsGood/status/1676928170854076416
https://twitter.com/MoonLIsGood/status/1676926771428732928
https://twitter.com/MoonLIsGood/status/1676925869548531713
SHE IS SO FRIENDLY THAT SHE HAS TOO MUCH FRIEND THATS BOY, WHY IS YOUR FREAKING PESAING ALWAYS NAME D..., FUCCCCCCCCCCCCCCCCCCCCCC
I EITHER NEED A FUCKING TIME MACHINE OR A BRAINWASHER MACHINE TO MAKE ME FORGET THAT I LIKE HER, HELL I WOULD PREFER NOT TO LIKE HER AT THE FIRST PLACE, I NEED A TIME TO THINK, I CANT THINK OF ANYSHIT RN
ALLRIGHT THATS IT REL, WE ARE DOING THE MISSION OF "NOT FALLING DEEPER BUT MORE KE ATAS SIH RELL, DONT FALL TOO DEEP, NANTI KAYAK 812"


if you ever feel like wanting to kinda curhat but dont know how, just write it all out here rel, actually ill put it on the top
- Farrel 7/6/2023

its been exactly 11 month since your last commit, ahahahah you fucking nailed it, for summaries, we've been in hts on 8-9/x/2023, basicly tgl 5 september, abis lo ke bandung, lo punya adik skrng relll!!!! nama dia fanyaa!!! dia lucu bgt, adik terbaik!!!, tp yaaa somehow manusia itu ga mau, gua jg tau kenapa sih, ga mau gua ga fokus ke dia, tp ya gpp, on the bright side lo dapet adik yg baikk bgt, dan lo sadar kalo dia ini BUKAN YANG TERBAIK buat lo, ikhlasin bahwasalnya lo udah ngehabisin 10 bulan buat kesia siaan, atleast you know how to treat a women now!, disapointed ? yes tapi... want to get back ? hell no. gua ga mau sama orang ini lagi, she has a bf now, and you know how it is, lets hope he is okay lmaooo
dear farrel 7/6/2023
operation `NOT FALLING DEEPER BUT MORE KE ATAS SIH RELL, DONT FALL TOO DEEP, NANTI KAYAK 812` failed, retreat

a lot thing has happened and i dont wish it to happened again, you are not ready to fall in love again, jgn cari pelarian woi farrel!!
- Farrel 6/12/2024








OKAY SERIOUS PART, if you are asking how you get these file, its from the lipi website that has its function fully plain and got executed on button.onclick where the soal id is located lmao
here is the function
```
function soal(tessoal_id){\n        $("#modal-proses").modal('show');\n        $.ajax({\n            url:'https://siap.lopi.co.id/index.php/tes_kerjakan/get_soal_by_tessoal/'+tessoal_id+'/'+$('#tes-user-id').val(),\n            type:"POST",\n            cache: false,\n            timeout: 10000,\n            success:function(respon){\n                var data = $.parseJSON(respon);\n                if(data.data==1){\n                    $('#tes-soal-id').val(data.tes_soal_id);\n                    $('#tes-soal-nomor').val(data.tes_soal_nomor);\n                    $('#isi-tes-soal').html(data.tes_soal);\n                    $('#tes-soal-ragu').val(data.tes_ragu);\n                    $('#judul-soal').html('ke '+data.tes_soal_nomor);\n\n                    if(data.tes_ragu==0){\n                        // Menghilangkan checkbox ragu-ragu\n                        $('#btn-ragu-checkbox').prop("checked", false);\n                    }else{\n                        // Menambah checkbox ragu-ragu\n                        $('#btn-ragu-checkbox').prop("checked", true);\n                    }\n\n                    // menghilangkan tombol sebelum jika soal di nomor1\n                    // dan menghilangkan tombol selanjutnya jika disoal terakhir\n                    var tes_soal_nomor = parseInt($('#tes-soal-nomor').val());\n                    var tes_soal_jml = parseInt($('#tes-soal-jml').val());\n                    var tes_soal_tujuan = data.tes_soal_nomor;\n                    if(tes_soal_tujuan==1){\n                        $('#btn-sebelumnya').addClass('hide');\n                        $('#btn-selanjutnya').removeClass('hide');\n                    }else if(tes_soal_tujuan==tes_soal_jml){\n                        $('#btn-sebelumnya').removeClass('hide');\n                        $('#btn-selanjutnya').addClass('hide');\n                    }else{\n                        $('#btn-sebelumnya').removeClass('hide');\n                        $('#btn-selanjutnya').removeClass('hide');\n                    }\n\n                }else if(data.data==2){\n                    window.location.reload();\n                }\n                $("#modal-proses").modal('hide');\n            },\n            error: function(xmlhttprequest, textstatus, message) {\n                if(textstatus==="timeout") {\n                    $("#modal-proses").modal('hide');\n                    notify_error("Gagal mengambil Soal, Silahkan Refresh Halaman");\n                }else{\n                    $("#modal-proses").modal('hide');\n                    notify_error(textstatus);\n                }\n            }\n        });\n    }
```

```
[
    "soal('1249726')",
    "soal('1249727')",
    "soal('1249728')",
    "soal('1249729')",
    "soal('1249730')",
    "soal('1249731')",
    "soal('1249732')",
    "soal('1249733')",
    "soal('1249734')",
    "soal('1249735')",
    "soal('1249736')",
    "soal('1249737')",
    "soal('1249738')",
    "soal('1249739')",
    "soal('1249740')",
    "soal('1249741')",
    "soal('1249742')",
    "soal('1249743')",
    "soal('1249744')",
    "soal('1249745')",
    "soal('1249746')",
    "soal('1249747')",
    "soal('1249748')",
    "soal('1249749')",
    "soal('1249750')",
    "soal('1249751')",
    "soal('1249752')",
    "soal('1249753')",
    "soal('1249754')",
    "soal('1249755')",
    "soal('1249756')",
    "soal('1249757')",
    "soal('1249758')",
    "soal('1249759')",
    "soal('1249760')",
    "soal('1249761')",
    "soal('1249762')",
    "soal('1249763')",
    "soal('1249764')",
    "soal('1249765')"
]
```
you dont need to rewrite it no more, here is the puppeteer version of it 

```
async function soal(id) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const url = 'https://siap.lopi.co.id/index.php/tes_kerjakan/get_soal_by_tessoal/' + id + '/ONPROCESSENV';
  await page.setCookie({
    name: 'ci_session',
    value: '99c3f776a81409d33ed5491373dbf055d86a6a8b',
    domain: 'siap.lopi.co.id',
    path: '/',
    httpOnly: true,
    secure: true,
    expires: Math.floor(Date.now() / 1000) + 60 * 60 // expires in 1 hour
  });
  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 10000 });
    
    page.screenshot({"path":"page.png"})
    await page.waitForSelector('img')
    
    const htmlContent = await page.content();
    fs.writeFile(id+'.html', htmlContent, (err) => {
      if (err) throw err;
      console.log('File saved as example.html');
    });
  } catch (error) {
    soal(id)
  }
};
```

the id you currently use is on the secret github enviroment in this repo

