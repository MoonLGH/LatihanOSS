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

