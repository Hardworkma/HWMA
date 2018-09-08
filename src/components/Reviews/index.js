import React from 'react'
import Slider from "react-slick";

export default class Reviews extends React.PureComponent{
    render() {
        let textStyle = {
            display: 'flex', justifyContent: 'center', paddingTop: '25px'
        }

        const settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div>
                    "I studied under Master Charles at a previous studio. His approach is
                    fun and engaging, but never lax or lazy. Traditional strikes and forms
                    are taught alongside more practical self-defense techniques, in an
                    environment that lets one set their own pace but encourages constant
                    improvement. Throughout my training, it was always clear what my goals
                    were to reach the next rank, and I was never confused or unsure of what
                    I should be focusing on to advance.

                    Classes were a good mix of warm-up, drilling, partner exercises, and
                    sparring, interspersed with solid discussion topics ranging from the
                    history and philosophy of martial arts to practical discussions of when
                    and why to fight in a modern context. During my time training under
                    Master Charles, I experienced an unrelated wrist injury, and Master
                    Charles worked very closely with me to help tailor my personal practice
                    so I could continue to advance while I healed.

                    The name of this studio is no accident. Master Charles will make sure
                    you work hard, but like all hard work, it will be very rewarding. If you
                    want to learn Martial Arts in an environment where you're pushed to
                    excel, but guided along the way by a professional, experienced
                    instructor, there's a place here for you." - Josh R.
                </div>
                <div>
                    "My family and I were lucky to have studied under Master Charles a few
                    years ago. If we lived closer we would be back without a doubt!" - Dana S.
                </div>
                <div>
                    "My family and I trained under Master Charles for a couple of years at
                    another school. You will not find a more dedicated, knowledgeable Master
                    Instructor anywhere. His classes are clean, fun and safe and he is
                    always able to change things up to keep you from getting bored. Master
                    Charles will challenge, push, and guide you. As long as you put the work
                    in, you will succeed!" - Matt S.
                </div>
                <div>
                    "Our son trained with Master Charles at a prior school for over seven
                    years. What stood out to me most all those years ago was his ability to
                    get our six-year-old to focus on instruction and follow through. Master
                    Charles has always been very clear that he expects students to focus and
                    progress.

                    Over the years, our son always chose Master Charles’ classes over other
                    instructors. He was very clear as to why: Master Charles pushed him
                    harder than other instructors. Over the years, we saw a transformation
                    in our son: he began to want greater success for himself. As a result of
                    our son’s hard work and Master Charles’ guidance and training, our son
                    earned a first degree Black Belt at 12 years old.

                    I have watched Master Charles grow as a martial artist and an
                    instructor. I watched him push himself to reach new personal goals. His
                    patience and kindness toward students grew over the years, and his
                    students respected and admired him for his teaching style and his
                    consistency. Master Charles has been an integral part of our son’s
                    development, and has continually provided a positive influence." -
                    Jennifer M.
                </div>
                <div>
                    "Master Charles taught me Tae Kwon Do for a decade, along with some Kung
                    Fu and various weapon styles. He’s able to teach people of any age and
                    any skill level. He often structures his classes so that anyone -
                    athletic or not, experienced or not - can comfortably exercise and train
                    to the best of their ability. He has many years of experience training
                    and working in this industry- with that, I fully believe that this
                    school will be one of the finest in Northern Virginia." - Sabrina A.
                </div>
                <div>
                    "Master Charles is one of the most credible and well established martial
                    artists in this area of Northern Virginia. His studies take him back
                    almost thirty years of multidisciplinary martial arts and follows the
                    highest standard for Olympic style Taekwondo.

                    He always references his techniques and teachings to evidence based and
                    empirical proven theories in teaching martial arts. What you buy from
                    him is the highest quality of training, martial art knowledge, and the
                    foundation for earning what you work hard for!

                    I vouch my over 20 year reputation in martial arts on his
                    professionalism and his ability to provide the highest quality of
                    Taekwondo you can pay for." - Master Christopher Sunday
                </div>
            </Slider>
        )
    }
}