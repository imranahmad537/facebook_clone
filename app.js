

   


function showpost()
{
    document.querySelector(".post-dlg").style.display = 'block';
    document.querySelector(".overlay").style.display = 'block';
    document.body.classlist.add('popup-opened');
}
function hidePostDialog()
{
    document.querySelector(".post-dlg").style.display = 'none';
    document.querySelector(".overlay").style.display = 'none';
    document.body.classlist.remove('popup-opened');
}

function selectImage(){
    document.getElementById('imageInput').click();
}
function previewAndUploadImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var imageUrl = e.target.result;
           let postDescription = document.querySelector(".postsrch").value;
           let imgfile = document.querySelector(".postimgs").src = imageUrl
           document.getElementById('postimgs').style.display = 'block';

        }
        reader.readAsDataURL(input.files[0]);
    }

    
    // // Clear input fields and hide dialog
    // document.getElementById('postdesc').value = '';
    // document.getElementById('postedimg').value = '';
    
}

function createpost()
{
    let postDescription = document.querySelector(".postsrch").value;

    document.querySelector(".postdesc").textContent = postDescription;
    let imgfile = document.querySelector(".postimgs").src = imageUrl
    document.getElementById('postimgs').style.display = 'block';

    hidePostDialog();
}





//     let post_des = document.getElementById(".post-des").value;
//     let sh_post_des = document.querySelector(".postdesc").innerText = post_des;
    


//  function selectimg(){
//     let input = document.createElement("input");
//     input.type = 'file';
//     input.accept = 'image/*'



//     input.onchange = function(event)
//     {
//     let file = event.target.file[0];
//     let reader = new FileReader();


//     reader.onload = function()
//     {
//         let postimg = document.querySelector(".postimg").src = reader.result;
//         uploadedTime();
//     }

//     reader.readAsDataURL(file);
//     }
//     input.click();

//  }






// function uploadedTime()
// {
//     let time = new Date();
//     let day = time.getDay();
//     let month = time.getMonth();
//     let yr = time.getFullYear();
//     document.getElementById(".showtime").textContent = `${month}  ${day} at ${yr}`;
// }