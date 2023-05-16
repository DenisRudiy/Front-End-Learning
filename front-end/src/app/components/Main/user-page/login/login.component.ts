import { Component, EventEmitter, Output } from '@angular/core'
import { MessageService } from 'primeng/api'
import { User } from 'src/app/interfaces/user'
import { RegServiceService } from 'src/app/services/reg-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent {
  users: User[] = []
  currentUser: User = new User()

  email: string = ''
  firstPassword: string = ''
  secondPassword: string = ''
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

  changeColor(id: string) {
    if (id == 'firstPassword' || id == 'secondPassword' || id == 'card') {
      document.getElementById(id)!.classList.remove('ng-invalid')
    } else {
      document.getElementById(id)!.style.borderColor = '#dacece'
    }
  }

  clear() {
    this.email = ''
    this.firstPassword = ''
    this.secondPassword = ''
  }

  @Output() hideLogPageEvent = new EventEmitter<any>()
  hideLogPage() {
    this.hideLogPageEvent.emit()
  }

  setUser() {
    this.regService.setLoginUser(this.currentUser)
  }

  loginUser() {
    let add = true
    let passwordPass = true
    let emailPass = false

    const emailObject = document.getElementById('email')!
    const fpObject = document.getElementById('firstPassword')!
    const spObject = document.getElementById('secondPassword')!

    if (this.email == '') {
      emailObject.style.borderColor = 'red'
      add = false
    } else {
      for (let i = 0; i < this.email.length; i++) {
        if (this.email[i] == '@') {
          emailPass = true
        }
      }
      if (emailPass == false) {
        emailObject.style.borderColor = 'red'
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
      let onLog = false
      for (let i = 0; i < this.users.length; i++) {
        if (
          this.users[i].email == this.email &&
          this.users[i].password == this.firstPassword
        ) {
          onLog = true
          this.currentUser.id = this.users[i].id
          this.currentUser.username = this.users[i].username
          this.currentUser.email = this.users[i].email
          this.currentUser.password = this.users[i].password
          this.currentUser.card = this.users[i].card
          this.currentUser.logo = this.users[i].logo
          this.currentUser.status = 'login'
          this.currentUser.balance = this.users[i].balance
        }
      }

      if (onLog == true) {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Thank you for registration'
        })

        this.setUser()
        setTimeout(() => this.hideLogPage(), 1000)
        setTimeout(() => this.clear(), 1000)
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'This user is not exist'
        })
        this.firstPassword = ''
        this.secondPassword = ''
      }
    }
  }
}
