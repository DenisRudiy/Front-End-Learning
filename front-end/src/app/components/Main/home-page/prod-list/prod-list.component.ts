import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { Food } from 'src/app/interfaces/food'
import { FoodService } from 'src/app/services/food.service'

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.scss']
})
export class ProdListComponent implements OnInit {
  lang: string = 'eng'
  foodList: Food[] = []

  constructor(private service: FoodService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((data) => {
      this.foodList = data
    })

    const storedLang = localStorage.getItem('language')
    if (storedLang == 'ukr') {
      this.lang = storedLang
    }

    const carousel = document.querySelector('.carousel') as HTMLElement | null

    let isDragStart = false,
      prevPageX: number,
      prevScrollLeft: number

    // updating global variables on mouse down event
    const DragStart = (e: MouseEvent) => {
      isDragStart = true
      prevPageX = e.pageX
      prevScrollLeft = carousel!.scrollLeft
    }
    const dragStop = () => {
      isDragStart = false
    }
    // scrolling images/carousel to left according to mouse pointer
    const dragging = (e: MouseEvent) => {
      if (carousel !== null) {
        if (!isDragStart) return
        e.preventDefault()
        let positionDiff = e.pageX - prevPageX
        carousel.scrollLeft = prevScrollLeft - positionDiff
      }
    }

    carousel!.addEventListener('mousedown', DragStart)
    carousel!.addEventListener('mousemove', dragging)
    carousel!.addEventListener('mouseup', dragStop)
  }
}
