import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout/index'

import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS } from '@contentful/rich-text-types'

export default function CandidateTemplate({ pageContext }) {
  const { candidate } = pageContext
  const { name, position, vision, image, platforms, portfolioDrive } = candidate
  const options = {
    renderNode: {
      [BLOCKS.UL_LIST]: (node, children) => {
        return <ul className="list-disc ml-4">{children}</ul>
      },
      [BLOCKS.OL_LIST]: (node, children) => {
        return <ol className="list-decimal ml-4">{children}</ol>
      },
    },
  }
  return (
    <Layout>
      <div className="bg-misaTeal min-h-[60vh] grid md:grid-cols-2 lg:grid-cols-[1fr_2fr] relative p-8 lg:px-16 md:py-0 overflow-hidden">
        <Link
          to="/elections"
          className="absolute left-8 md:left-4 top-4 md:top-12 text-white"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
              fill="currentColor"
            />
          </svg>
        </Link>
        <div className="mt-8 md:mt-0 h-96 md:h-auto relative z-20">
          <img
            alt="candidateImage"
            src={image.file.url}
            className={`h-full w-full object-cover object-top rounded-xl md:rounded-none`}
          />
          {portfolioDrive && (
            <div className="absolute bottom-0 rounded-b-xl p-2 bg-[rgba(0,0,0,.5)] w-full text-white">
              <a
                href={portfolioDrive}
                target="_blank"
                rel="noreferrer"
                className="flex gap-2 justify-center"
              >
                <p>Portfolio</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.6396 7.02527H12.0181V5.02527H19.0181V12.0253H17.0181V8.47528L12.1042 13.3892L10.6899 11.975L15.6396 7.02527Z"
                    fill="currentColor"
                  />
                  <path
                    d="M10.9819 6.97473H4.98193V18.9747H16.9819V12.9747H14.9819V16.9747H6.98193V8.97473H10.9819V6.97473Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-end gap-8 py-8 p-0 md:p-10 lg:p-12 text-white">
          <div>
            <span className="italic font-thin">
              {position?.title} candidate
            </span>
            <h3 className="font-bold text-5xl">{name}</h3>
          </div>
          <div>
            <span className="uppercase font-bold text-2xl">Vision</span>
            <p>{vision.vision}</p>
          </div>
        </div>
        <StaticImage
          quality={100}
          className={`max-w-[320px] absolute -top-14 -right-8 md:rotate-180 opacity-20 lg:opacity-100`}
          src="../../../static/images/eventshexagons.png"
        />
      </div>
      <div className="bg-white p-8 lg:px-16">
        <h2 className="text-misaTeal text-5xl font-extrabold">Platforms</h2>
        <div className="py-8 grid gap-4">
          {renderRichText(platforms, options)}
        </div>
      </div>
      {/* <p>{platform}</p> */}
    </Layout>
  )
}
