import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-testimonial',
  templateUrl: 'testimonial.component.html',
  styleUrls: ['testimonial.component.css'],
})
export class Testimonial {
  @Input()
  heading1: string = 'Why Choose Tirumala Planners'
  @Input()
  content1: string =
    'We bring years of expertise in CADD planning and design to deliver precise, innovative solutions tailored to your project needs.'

  // Features instead of testimonials
  @Input()
  feature1Title: string = 'Precision & Accuracy'
  @Input()
  feature1Description: string =
    'Our CADD drawings are meticulously crafted with attention to detail, ensuring accuracy in every dimension and specification for your project.'
  @Input()
  feature1Icon: string = '📐'

  @Input()
  feature2Title: string = 'Professional Expertise'
  @Input()
  feature2Description: string =
    'Experienced team of CAD planners and designers who understand the technical requirements of diverse projects across residential, commercial, and industrial sectors.'
  @Input()
  feature2Icon: string = '👷'

  @Input()
  feature3Title: string = 'Innovative 3D Solutions'
  @Input()
  feature3Description: string =
    'Advanced 3D modeling capabilities that bring your vision to life, helping you visualize the final outcome before construction begins.'
  @Input()
  feature3Icon: string = '🏗️'

  @Input()
  feature4Title: string = 'Timely Delivery'
  @Input()
  feature4Description: string =
    'Committed to meeting project deadlines with efficient workflows and responsive communication throughout every phase of your project.'
  @Input()
  feature4Icon: string = '⚡'
  constructor() {}
}
