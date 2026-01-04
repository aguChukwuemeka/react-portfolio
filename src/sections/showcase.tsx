import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default function Showcase() {
    const sectionsRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        gsap.fromTo(sectionsRef.current,
            {opacity: 0},
            {opacity: 1, duration: 1.5}
        );

        projects.forEach((project, index) => {
            gsap.fromTo(project, {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 1.3 * (index + 1),
                scrollTrigger: {
                    trigger: project,
                    start: 'top bottom=100'
                }
            })
        });

    },[]);


    return (
        <section id="work" className="app-showcase" ref={sectionsRef}>
            <div className="w-full">
                <div className="showcaselayout">
                     <div className="first-project-wrapper" ref={project1Ref}>
                         <div className="image-wrapper">
                             <img src="/images/project1.png" alt="Rhyda" />
                         </div>
                         <div className="text-content">
                             <h2>On-Demand Rides Made Simple with a Powerful, User-Friendly App called Rhyda</h2>
                             <p className="text-white-50 md:text-xl">An app built with React Native Expo, & Tailwind well
                             optimized, user-friendly experience</p>
                         </div>
                     </div>
                    <div className="project-list-wrapper overflow-hidden" ref={project2Ref}>
                        <div className="project">
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/project2.png" alt="Libary Management Platform" />
                            </div>
                            <h2>Library Management Platform</h2>
                        </div>
                    </div>
                    <div className="project-list-wrapper overflow-hidden" ref={project3Ref}>
                        <div className="project">
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src="/images/project3.png" alt="YC Dirctory" />
                            </div>
                            <h2>YC Directly - Startup Showcase</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
