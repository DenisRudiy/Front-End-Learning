import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Subscription } from 'rxjs'
import { User } from 'src/app/interfaces/user'
import { RegServiceService } from 'src/app/services/reg-service.service'

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  clickEventSubscription!: Subscription
  loginUser: User = new User()
  darkTheme: boolean = false
  pageUkr: boolean = false
  lang: string = 'eng'

  ngOnInit(): void {
    const storedLoginUser = localStorage.getItem('loginUser')
    const storedTheme = localStorage.getItem('theme')
    const storedLang = localStorage.getItem('language')!

    if (storedLoginUser) {
      this.loginUser = JSON.parse(storedLoginUser)
    }
    if (storedTheme) {
      this.darkTheme = storedTheme === 'dark'
    }
    if (this.darkTheme == true) {
      document.body.classList.toggle('dark-theme')
    }
    if (storedLang) {
      this.pageUkr = storedLang === 'ukr'
    }
    if (storedLang == 'ukr') {
      this.lang = storedLang
    }
  }

  togglePageLang(): void {
    this.pageUkr = !this.pageUkr
    localStorage.setItem('language', this.pageUkr ? 'ukr' : 'eng')
    location.reload()
  }

  toggleDarkTheme(): void {
    this.darkTheme = !this.darkTheme
    document.body.classList.toggle('dark-theme')
    localStorage.setItem('theme', this.darkTheme ? 'dark' : 'light')
  }

  constructor(private regService: RegServiceService) {
    this.clickEventSubscription = this.regService
      .getLoginUser()
      .subscribe((data: User) => {
        localStorage.setItem('loginUser', JSON.stringify(data))
        this.loginUser = data
      })
  }

  @Output() showPageEvent = new EventEmitter<any>()
  showRegPage() {
    this.showPageEvent.emit()
  }

  @Output() showLogPageEvent = new EventEmitter<any>()
  showLogPage() {
    this.showLogPageEvent.emit()
  }

  @Output() showEditPageEvent = new EventEmitter<any>()
  showEditPage() {
    this.showEditPageEvent.emit()
  }

  onQuit() {
    this.loginUser = new User()
    localStorage.setItem('loginUser', JSON.stringify(this.loginUser))
    location.reload()
  }
}
