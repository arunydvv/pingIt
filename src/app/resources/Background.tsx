import React from 'react'

const Background = () => {
  return (
      <div className="absolute inset-0">
          <svg
              className="absolute h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
          >
              <defs>
                  <pattern
                      id="grid"
                      width="32"
                      height="32"
                      patternUnits="userSpaceOnUse"
                  >
                      <path
                          d="M0 .5H32M.5 0V32"
                          fill="none"
                          stroke="rgb(226 232 240 / 0.3)"
                      />
                  </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
      </div>
  )
}

export default Background