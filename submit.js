let iPhoto = localStorage.getItem('cPhoto')
let iName = localStorage.getItem('cName')
let iAddress = localStorage.getItem('cAddress')
let iContact = localStorage.getItem('cContact')
let iPhoneNum = localStorage.getItem('cPhoneNum')
let iFax = localStorage.getItem('cFax')
let iComment = localStorage.getItem('cComment')
var cPhoto = JSON.parse(iPhoto)
var cName = JSON.parse(iName)
var cAddress = JSON.parse(iAddress)
var cContact = JSON.parse(iContact)
var cPhoneNum = JSON.parse(iPhoneNum)
var cFax = JSON.parse(iFax)
var cComment = JSON.parse(iComment)

function sendEmail(iname, iaddress, icontact, iphoneNum, ifax, icomment) {

  let subject = '表單提交成功'
  let body =  '名稱:%20' + iname + '%0D地址:%20'+ iaddress + '%0D聯絡人:%20' + icontact + '%0D電話號碼:%20' + iphoneNum + '%0D傳真:%20'+ ifax + '%0D意見:%0D' + icomment

  window.location.href = "mailto:" + "test@example.com" + "?subject=" + subject + "&body=" +body;
}

function store (){
  let photo = document.getElementById('imgInp')
  let name = document.getElementById('name').value
  let address = document.getElementById('address').value
  let contact = document.getElementById('contact').value
  let phoneNum = document.getElementById('phoneNum').value
  let fax = document.getElementById('fax').value
  let comment = document.getElementById('comment').value
  cPhoto.push(photo)
  cName.push(name)
  cAddress.push(address)
  cContact.push(contact)
  cPhoneNum.push(phoneNum)
  cFax.push(fax)
  cComment.push(comment)
  localStorage.setItem('cPhoto', JSON.stringify(cPhoto));
  localStorage.setItem('cName', JSON.stringify(cName));
  localStorage.setItem('cAddress', JSON.stringify(cAddress));
  localStorage.setItem('cContact', JSON.stringify(cContact));
  localStorage.setItem('cPhoneNum', JSON.stringify(cPhoneNum));
  localStorage.setItem('cFax', JSON.stringify(cFax));
  localStorage.setItem('cComment', JSON.stringify(cComment));
}

let submit = document.getElementById('submitBtn')
submit.addEventListener('click', function(){
  let photo = document.getElementById('imgInp')
  let name = document.getElementById('name').value
  let address = document.getElementById('address').value
  let contact = document.getElementById('contact').value
  let phoneNum = document.getElementById('phoneNum').value
  let fax = document.getElementById('fax').value
  let comment = document.getElementById('comment').value

  if(address == false){
    address = document.getElementById('map-link').textContent
  }
  if(photo == false||name == false||address == false){
    alert('請填寫有*的項目')
  }else{
    sendEmail(name, address, contact, phoneNum, fax, comment)
    store()
  }})


  

