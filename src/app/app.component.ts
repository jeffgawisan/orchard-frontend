import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.mobile.scss', './app.component.desktop.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
    title = 'skill-test';
    featuredContent = {
        title: "ANSWER YOUR BODY'S NEED",
        description:
            "The way ingredients are sourced affects the way nourish our bodies. Author Mark Schatzer believes our body naturally develops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume accourding to your body's needs",
        moreDetails: {
            title: 'BE MINDFUL',
            description:
                "Sourcing local or organic food is a good way to start being more mindful about what your'e cooking and eating.",
        },
        images: [
            {
                desktop: '/assets/images/component-01/Image-01@2x.jpg',
                mobile: '/assets/images/component-01/Image-01.jpg',
            },
            {
                desktop: '/assets/images/component-01/Image-02@2x.jpg'  ,
                mobile: '/assets/images/component-01/Image-02.jpg',
            },
            {
                desktop: '/assets/images/component-01/Image-03@2x.jpg',
                mobile: '/assets/images/component-01/Image-03.jpg',
            },
        ],
    };

}
