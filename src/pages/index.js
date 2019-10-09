import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import GIF from '../gifs/Heroanimation.gif'
import Question from "../components/question"
import Balsamiq from '../images/balsamiq.png'







const IndexPage = () => (
  <Layout>
      <SEO title="Rose Hack 2020" />
      <div className={'overlay'}>
          <img src={GIF} className={'animation'} />
      <div className={'centerButton'}>
    <a href="/apply"  style={{fontFamily: 'Press Start 2P, cursive'}} className="apply-button"> Apply</a>
      </div>
      <h1 className={'date'}> January 18 - 19, 2020</h1>
      </div>
      <section className={'title'} id={'about'}>
          <h1>About </h1>
        <p>Rose Hack is UC Riverside’s women-centric hackathon*, founded by the female leaders of the Association for Computing Machinery (ACM-W) and the Society of Women Engineers (SWE). Rose Hack’s mission is to encourage individuals from underrepresented groups in STEM to create a strong network together through their shared passions in Science and Technology.
          Come for a lively weekend of innovation, face masks, discovering and creating new technology, networking, mentorship, and much more.</p>
      </section>
    <section className={'title'} id={'questions'}>
      <h1 style={{textAlign: "center",}}>FAQs</h1>
        <div className={'questionContainer'}>
          <div className={'half'}>
              <Question question={"What is a hackathon?"} answer={'A hackathon is a tech-focused event where individuals come together to build projects over the weekend. Projects can be an app, website, or anything that you want to build!'}/>
              <Question question={"Who can attend?"} answer={'All high school students or undergraduate students in any major are eligible to apply! Priority will be given to women or other underrepresented groups in tech.'}/>
              <Question question={"How much do I have to pay?"} answer={'Rose Hack is completely free! You\'ll get a weekend\'s worth of swag, snacks, meals, drinks and a place to sleep. Free parking is also provided! '}/>
      <Question question={"What should I bring?"} answer={'Make sure to bring your laptop, chargers, toiletries, student ID, and anything else you need for 24 hours of hacking.'}/>
              <Question question={"Do I have to be on a team?"} answer={'Though it is not required, we highly recommend that you form or join a team. We will have a team formation session if you cannot find a team before then.'}/>

          </div>
            <div className={'half'}>
                <Question question={'Are there travel reimbursements?'} answer={'Unfortunately, we won\'t be able to provide travel reimbursements this year. However, participants will be provided with parking permits to park at UC Riverside for free.'}/>
                <Question question={"What if I don't know how to code?"} answer={'Rose Hack is open to all skill levels! We will also host workshops and provide awesome mentors that can help you learn and build your amazing project!'}/>
                <Question question={"Can I start hacking before the event?"} answer={'All projects for Rose Hack must be made during the weekend. Planning and gathering resources before the hackathon is allowed.'}/>
                <Question question={"I am not female. Should I still apply?"} answer={'Absolutely! All high school and undergraduate students from any background and ethnicities are welcome to apply!'}/>
                <Question question={"When should I show up/leave?"} answer={'Participants should plan to arrive early Saturday morning(Jan 18) and leave Sunday afternoon(Jan 19). A detailed schedule will be released soon!'}/>

            </div>
        </div>
        <p className={'title'} style={{position: "relative", top: '30px'}}>Still have questions? Feel free to send us a <a href="mailto:rosehackucr@gmail.com">message</a>!</p>
    </section>
    <section className={'title'} id={'sponsors'}>
      <h1 className={'sponsorTitle'}>Sponsors</h1>
        <div className={'sponsorContainer'}>
            <a href="https://balsamiq.com/" target="_blank" rel="noopener">
                <img className={'sponsor'} src={Balsamiq} alt="Balsamiq"/>
            </a>
        </div>
<p>Interested in sponsoring Rose Hack 2020? Contact <a href="mailto:rosehackucr@gmail.com">us</a> or view our <a target={'_blank'} href="https://drive.google.com/file/d/1FhW65cbSZtFP4D2GwONYR08pLqQpoGaN/view?usp=sharing">sponsorship package</a>.</p>

    </section>
  </Layout>
)

export default IndexPage

