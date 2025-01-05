export function Logo({ className = "", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 584 584"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#584D6D" />
          <stop offset="100%" stopColor="#9B8BB4" />
        </linearGradient>
      </defs>
      <path
        fillRule="evenodd"
        fill="url(#logoGradient)"
        d="M37,101S-81.78,319.135,111,470c216.318,161.457,419.811-28.354,454-140,2.176-9.94,43.816-129.59-50-280,70.654,135.758,36.057,357.767-176,412-89.068,18.925-203.2-5.289-282-139C-5.913,212.827,37,101,37,101Z"
      />
      <path
        fillRule="evenodd"
        fill="url(#logoGradient)"
        d="M197,296v-1c-0.008,0-8.15,80.315,93,84,48.368-3.878,69-31,69-31s20.545-19.874,18-53c-1.028-.516-52,0-52,0s-19.11,22.179-29,23c-17.474,3.551-28-5-28-5s-14.551-11.03-19-18C248.95,295.311,197,296,197,296Z"
      />
      <circle cx="139" cy="288" r="24" fill="url(#logoGradient)"/>
      <circle cx="435" cy="288" r="24" fill="url(#logoGradient)"/>
    </svg>
  )
}

