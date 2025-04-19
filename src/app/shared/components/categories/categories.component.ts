import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  @ViewChild('sectionRef') sectionRef!: ElementRef;

ngAfterViewInit() {
  const section = this.sectionRef.nativeElement;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.querySelector('.text-side')?.classList.add('animate-fade-in-left');
          section.querySelectorAll('.image-side').forEach((el: Element) =>
            el.classList.add('animate-fade-in-right')
          );
                  
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(section);
}

}
