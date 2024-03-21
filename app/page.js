"use client";
import React from "react";
import Image from "next/image";
import Reveal from "./(components)/AnimateReveal";
import Link from "next/link";

export default function Home() {
  const base_url = "http://djacmarg.github.io/digital-resume";
  const erc_cert_link =
    "https://certificate.evidenz.io/check/BA55E42EE976F0FB2609A95B0DB41056161E238CD19C439E8B03F454B16EFDF9Yk9kOUNpb1FoR3gzQ0xycWZxRVAzdjc3RkZnMFJ4L2ZWKzR3Vnh3cU81bW0zL2Qy";
  return (
    <div className="container">
      <div className="hero">
        <Image
          className="profile--pic"
          src="/images/profile-img.JPG"
          alt="profile-img"
          width={100}
          height={100}
        />

        <div>
          <Reveal>
            <h1>Durotoye Oyerinde</h1>
            <h3>Full Stack Engineer</h3>
          </Reveal>
          <Reveal>
            <>
              Full-stack Engineer with 12+ years of experience. Have designed
              and developed a wide range of web applications and database
              management solutions for multiple clients. Have leveraged
              expertise in technologies such as PHP, Laravel, CodeIgniter,
              ReactJS, NextJS, NodeJS, MySQL, MongoDB, Redux, HTML, CSS,
              TailwindCSS and JavaScript to deliver functional, reliable, and
              efficient software solutions. Previous work includes developing a
              payment gateway solution, an attendance management system, and an
              all-in-one school administrative workflow automation software.
              Have contributed to the growth and success of multiple
              organizations and clients, delivering high-quality solutions that
              meet their specific needs and requirements.
            </>
          </Reveal>
        </div>
      </div>
      <Reveal>
        <div className="sect">
          <h3 className="pd">TECH STACK & FRAMEWORKS</h3>
          <div className="stacks">
            <div className="stack">
              <span>LAMP | Linux Apache, MySQL & PHP </span>
            </div>
            <div className="stack">
              <span>LEMP | Linux NGINX, MySQL, PHP</span>
            </div>
            <div className="stack">
              <span>Git, Github, BitBucket</span>
            </div>
            <div className="stack">
              <span>MERN | MongoDB, Express, React, Node</span>
            </div>
            <div className="stack">
              <span>NextJS</span>
            </div>

            <div className="stack">
              <span>PHP Framework | Laravel, CodeIgniter</span>
            </div>
            <div className="stack">
              <span>REACT NATIVE</span>
            </div>
            <div className="stack">
              <span>Database | SQL, MySQL, MongoDB, SQLite, MS Acess</span>
            </div>

            <div className="stack">
              <span>HTML5, CSS3, TailwindCSS, Bootstrap</span>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="sect">
          <h3 className="pd">PORTFOLIO</h3>
          <div className="stacks">
            <div className="stack">
              <span>
                <Link href="https://zurepay.com">Zurepay</Link>
              </span>
            </div>
            <div className="stack">
              <Link href="https://systemar.org">Systemar</Link>
            </div>
            <div className="stack">
              <span>
                <Link href="https://cocarehg.ca">Cocare Health Group</Link>
              </span>
            </div>

            <div className="stack">
              <span>
                <Link href="https://lsharbor.com">Life Serenity Harbor</Link>
              </span>
            </div>
            <div className="stack">
              <Link href="https://vitcarellc.com">Vital Care</Link>
            </div>
            <div className="stack">
              <Link href="https://www.lolbod.ca">Lolbod</Link>
            </div>
            <div className="stack">
              <Link href="https://afitinstitute.org">Afit Institute</Link>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="sect">
          <h3 className="pd">WORK HISTORY</h3>
          <div className="wh">
            <h3>Techsolute Labs: July 2017 - Date | CEO & Tech Lead</h3>
            <ul>
              <li>
                Maintaining School Management Systems that I built for Clients.
              </li>
              <li>
                Am currently working on a gate pass mobile application using
                react native for Android & iOS devices.
              </li>
            </ul>
          </div>

          <div className="wh">
            <h3>
              Meridian Consults (Pty) Limited Nov 2011 - June 2017 | ICT Lead
            </h3>

            <ul>
              <li>
                Design & Developed Database Management System Solutions for
                Clients
              </li>
              <li>Trained participants on records managements and database</li>
              <li>
                Redesigned and maintained the organization (Meridian Consults)
                website
              </li>
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="sect">
          <h3 className="pd">FORMAL EDUCATION</h3>
          <p className="pd">
            Highest Formal Qualification: <br />
            Higher National Diploma Mechanical Engineering
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="sect">
          <h3 className="pd">IT TRAINING & CERTS</h3>
          <ul className="pd">
            <li>
              Blockchain Development | March 2021{" "}
              <a href={`${erc_cert_link}`}>view or download</a>{" "}
            </li>
            <li>
              Android Developer | Oct 2019{" "}
              <a href={`${base_url}/certs/android.pdf`}>view or download</a>
            </li>
          </ul>
        </div>
      </Reveal>
      <Reveal>
        <div className="sect">
          <h3 className="pd">Notable Projects:</h3>

          <div className="np">
            <h3>ZurePay: FinTech Website [MERN]</h3>
            <p className="pd">
              Fast, secure payments ZurePay’s gateway solutions make it fast and
              secure to accept payments from customers, no matter the size.
              <br />
              <br />
              Facilitates seamless cross-border transactions, supporting
              multiple currencies and providing competitive exchange rates for
              international payments.
            </p>
          </div>

          <div className="np">
            <h3>Eazitap: All in one smart card Integration [LEMP]</h3>
            <p className="pd">
              Eazitap is an attendance management solutions application
              Developed for a lagos based start up company in 2020 used by
              learning institutions. This application is 5 module application
              that interfaced School Admins, Sponsors, Parents and Students.
            </p>
          </div>

          <div className="np">
            <p className="pd">
              This application sends a realtime short message service (SMS) with
              the details such as students name, date and arrival/departure time
              to parents/guardian's phone immediately the student signed in with
              either their RFID card or fingerprints at the school premises.
            </p>
          </div>

          <div className="np">
            <h3>Systemar.org School Management System [LAMP]</h3>
            <p className="pd">
              Systemar is a complete school management solution software for
              management of school activities such as admission, attendance,
              reports card, timetable, ID cards generation test/exam takers.
            </p>
            <p className="pd">
              This application is used by schools in Swaziland and Nigeria since
              2019. This application consist of these 7 different modules
              [Admins, Teachers, Parents, Students, Library, Account &
              Transport]
            </p>
          </div>

          <div className="np">
            <h3>KiaHire</h3>
            <p className="pd">
              Esrow based freelance website that connects clients and developers
              in real time.
            </p>
          </div>
        </div>
      </Reveal>
      <div className="sect">
        <h3 className="pd">SOCIAL LINKS</h3>
        <p className="social">
          <a href="https://github.com/djacmarg">Github</a>
          <a href="https://facebook.com/profile.php?id=100094438270448">
            Facebook
          </a>
          <a href="https://www.linkedin.com/in/codoneer/">Linkedin</a>
          <a href="https://twitter.com/Djacmarg">Twitter</a>
        </p>
      </div>

      <Reveal>
        <div className="sect">
          <h3 className="pd">DOWNLOAD LINKS</h3>
          <p className="social">
            <a href={`${erc_cert_link}`}> Blockchain Training Cert</a>
            <a href={`${base_url}/certs/android.pdf`}>Android Training Cert</a>
          </p>
        </div>
      </Reveal>
      <div className="clearboth"></div>
    </div>
  );
}
