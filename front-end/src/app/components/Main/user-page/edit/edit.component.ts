import { Component, OnInit } from '@angular/core'
import { MessageService } from 'primeng/api'
import { Subscription } from 'rxjs'
import { User } from 'src/app/interfaces/user'
import { RegServiceService } from 'src/app/services/reg-service.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [MessageService]
})
export class EditComponent implements OnInit {
  clickEventSubscription!: Subscription
  users: User[] = []
  loginUser: User = new User()
  firstPassword: string = ''
  secondPassword: string = ''
  photo!: string
  photoPass: boolean = false

  constructor(
    private regService: RegServiceService,
    private messageService: MessageService
  ) {
    this.clickEventSubscription = this.regService
      .getLoginUser()
      .subscribe((data: User) => {
        localStorage.setItem('loginUser', JSON.stringify(data))
        this.loginUser = data
        this.firstPassword = this.loginUser.password
        this.secondPassword = this.loginUser.password
      })
  }

  ngOnInit(): void {
    const storedLoginUser = localStorage.getItem('loginUser')
    if (storedLoginUser) {
      this.loginUser = JSON.parse(storedLoginUser)
      this.firstPassword = this.loginUser.password
      this.secondPassword = this.loginUser.password
    }

    this.regService.getUser().subscribe((data) => {
      this.users = data
    })
  }

  onUpdate() {
    this.regService.updateUser(this.loginUser).subscribe((data) => {})
  }
  setUser() {
    this.regService.setLoginUser(this.loginUser)
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0]
    const reader = new FileReader()
    reader.onload = (e: any) => {
      const url = e.target.result
      sessionStorage.setItem('profileImage', url)
    }
    reader.readAsDataURL(file)
    this.photo = sessionStorage['profileImage']
    this.photoPass = true
  }

  changeColor(id: string) {
    if (id == 'firstPassword' || id == 'secondPassword' || id == 'card') {
      document.getElementById(id)!.classList.remove('ng-invalid')
    } else {
      document.getElementById(id)!.style.borderColor = '#dacece'
    }
  }

  updateUser() {
    let add = true
    let passwordPass = true
    let emailPass = false

    const usernameObject = document.getElementById('username')!
    const emailObject = document.getElementById('email')!
    const fpObject = document.getElementById('firstPassword')!
    const spObject = document.getElementById('secondPassword')!
    const cardNumberObject = document.getElementById('card')!

    if (this.loginUser.username == '') {
      usernameObject.style.borderColor = 'red'
      add = false
    }

    if (this.loginUser.email == '') {
      emailObject.style.borderColor = 'red'
      add = false
    } else {
      for (let i = 0; i < this.loginUser.email.length; i++) {
        if (this.loginUser.email[i] == '@') {
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

    if (this.loginUser.card == '') {
      cardNumberObject.classList.add('ng-invalid')
      add = false
    }

    if (add == false) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please, fill in all fields'
      })
    } else if (passwordPass == false) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please, repeat password'
      })
    } else if (emailPass == false) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please, type correct email'
      })
    } else {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Thank you for registration'
      })

      this.loginUser.password = this.firstPassword
      if (this.photoPass == true) {
        this.loginUser.logo = this.photo
      }

      this.onUpdate()
      this.setUser()
    }
  }
}
