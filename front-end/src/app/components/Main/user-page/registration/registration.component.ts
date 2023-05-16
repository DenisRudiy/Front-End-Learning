import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { MessageService } from 'primeng/api'
import { User } from 'src/app/interfaces/user'
import { RegServiceService } from 'src/app/services/reg-service.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [MessageService]
})
export class RegistrationComponent implements OnInit {
  users: User[] = []
  new_user: User = new User()
  username: string = ''
  email: string = ''
  firstPassword: string = ''
  secondPassword: string = ''
  card: string = ''
  lang: string = 'eng'

  constructor(
    private messageService: MessageService,
    private regService: RegServiceService
  ) {}

  ngOnInit(): void {
    this.regService.getUser().subscribe((data) => {
      this.users = data
    })
    const storedLang = localStorage.getItem('language')
    if (storedLang == 'ukr') {
      this.lang = storedLang
    }
  }

  onAdd() {
    this.regService.createUser(this.new_user).subscribe((data) => {})
  }

  changeColor(id: string) {
    if (id == 'firstPassword' || id == 'secondPassword' || id == 'card') {
      document.getElementById(id)!.classList.remove('ng-invalid')
    } else {
      document.getElementById(id)!.style.borderColor = '#dacece'
    }
  }

  clear() {
    this.username = ''
    this.email = ''
    this.firstPassword = ''
    this.secondPassword = ''
    this.card = ''
  }

  @Output() hidePageEvent = new EventEmitter<any>()
  hideRegPage() {
    this.hidePageEvent.emit()
  }

  setUser() {
    this.regService.setLoginUser(this.new_user)
  }

  createUser() {
    let add = true
    let passwordPass = true
    let emailPass = false

    const usernameObject = document.getElementById('username')!
    const emailObject = document.getElementById('email')!
    const fpObject = document.getElementById('firstPassword')!
    const spObject = document.getElementById('secondPassword')!
    const cardNumberObject = document.getElementById('card')!

    if (this.username == '') {
      usernameObject.style.borderColor = 'red'
      add = false
    }

    if (this.email == '') {
      emailObject.style.borderColor = 'red'
      add = false
    } else {
      for (let i = 0; i < this.email.length; i++) {
        if (this.email[i] == '@') {
          emailPass = true
        }
      }
    }

    if (this.firstPassword == '' || this.secondPassword == '') {
      fpObject.classList.add('ng-invalid')
      spObject.classList.add('ng-invalid')
      add = false
    } else if (this.secondPassword != this.firstPassword) {
      fpObject.classList.add('ng-invalid')
      spObject.classList.add('ng-invalid')
      passwordPass = false
    }

    if (this.card == '') {
      cardNumberObject.classList.add('ng-invalid')
      add = false
    }

    if (add == false) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please, fill in all fields'
      })
      this.firstPassword = ''
      this.secondPassword = ''
    } else if (passwordPass == false) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please, repeat password'
      })
      this.firstPassword = ''
      this.secondPassword = ''
    } else if (emailPass == false) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please, type correct email'
      })
      this.firstPassword = ''
      this.secondPassword = ''
    } else {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Thank you for registration'
      })

      this.new_user.id = this.users[this.users.length - 1].id + 1
      this.new_user.username = this.username
      this.new_user.email = this.email
      this.new_user.password = this.firstPassword
      this.new_user.card = this.card
      this.new_user.logo =
        'https://img.icons8.com/material/96/A6A6A6/user-male-circle--v1.png'
      this.new_user.status = 'login'
      this.new_user.balance = 0

      this.onAdd()
      this.setUser()
      setTimeout(() => this.hideRegPage(), 1000)
      setTimeout(() => this.clear(), 1000)
    }
  }
}
