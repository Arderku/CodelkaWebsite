import { lexend } from '../../fonts'

// 1) You can store your HTML snippet as a constant string. 
//    Everything inside this `htmlSnippet` string will end up in dangerouslySetInnerHTML.
//    We have removed the original <style> ... </style> block here 
//    because we will handle that separately in <style jsx global>.
const htmlSnippet = `
<span style="display: block;margin: 0 auto 3.125rem;width: 11.125rem;height: 2.375rem;background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAxNzggMzgiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRDFEMUQxIiBkPSJNNC4yODMgMjQuMTA3Yy0uNzA1IDAtMS4yNTgtLjI1Ni0xLjY2LS43NjhoLS4wODVjLjA1Ny41MDIuMDg2Ljc5Mi4wODYuODd2Mi40MzRILjk4NXYtOC42NDhoMS4zMzJsLjIzMS43NzloLjA3NmMuMzgzLS41OTQuOTUtLjg5MiAxLjcwMi0uODkyLjcxIDAgMS4yNjQuMjc0IDEuNjY1LjgyMi40MDEuNTQ4LjYwMiAxLjMwOS42MDIgMi4yODMgMCAuNjQtLjA5NCAxLjE5OC0uMjgyIDEuNjctLjE4OCAuNDczLS40NTYuODMzLS44MDMgMS4wOC0uMzQ3LjI0Ny0uNzU2LjM3LTEuMjI1LjM3ek0zLjggMTkuMTkzYy0uNDA1IDAtLjcuMTI0LS44ODYuMzczLS4xODcuMjQ5LS4yODMuNjYtLjI5IDEuMjMzdjAuMTc3YzAgLjY0NS4wOTUgMS4xMDcuMjg3IDEuMzg2LjE5Mi4yOC40OTUuNDE5LjkxLjQxOS43MzQgMCAxLjEwMS0uNjA1IDEuMTAxLTEuODE2IDAtLjU5LS4wOS0xLjAzNC0uMjctMS4zMjktLjE4Mi0uMjk1LS40NjUtLjQ0My0uODUyLS40NDN6bTUuNTcgMS43OTRjMCAuNTk0LjA5OCAxLjA0NC4yOTMgMS4zNDguMTk2LjMwNC41MTMuNDU3Ljk1NC40NTcuNDM3IDAgLjc1LS4xNTIuOTQyLS40NTQuMTkyLS4zMDMuMjg4LS43NTMuMjg4LTEuMzUxIDAtLjU5NS0uMDk3LTEuMDQtLjI5LTEuMzM4LS4xOTQtLjI5Ny0uNTEtLjQ0NS0uOTUtLjQ0NS0uNDM4IDAtLjc1My4xNDctLjk0Ni40NDMtLjE5NC4yOTUtLjI5Ljc0Mi0uMjkgMS4zNHptNC4xNTMgMGMwIC45NzctLjI1OCAxLjc0Mi0uNzc0IDIuMjkzLS41MTUuNTUyLTEuMjMzLjgyNy0yLjE1NC44MjctLjU3NiAwLTEuMDg1LS4xMjYtMS41MjUtLjM3OC0uNDQtLjI1MS0uNzc5LS42MS0xLjAxNS0xLjA4LS4yMzYtLjQ2OS0uMzU1LTEuMDE5LS4zNTUtMS42NDl2LS4wNDhjMC0uOTgxLjI1Ni0xLjc0NC43NjgtMi4yODguNTEyLS41NDUgMS4yMzItLjgxNyAyLjE2LS44MTcuNTc2IDAgMS4wODUuMTI2IDEuNTI1LjM3Ni40NC4yNTEuNzc5LjYxIDEuMDE1IDEuMDguMjM2LjQ2OC4zNTUgMS4wMi4zNTUgMS42NDl6bTQuMDI5IDEuMTY2Yy0uMzQ3IDAtLjYyLjExLS44MTcuMzMtLjE5Ny4yMi0uMzEuNTMzLS4zMzguOTM3aDIuMjk5Yy0uMDA3LS40MDQtLjExMy0uNzE3LS4zMTctLjkzNy0uMjA0LS4yMi0uNDgtLjMzLS44MjctLjMzem0uMjMgNS4wNmMtLjk2NiAwLTEuNzIyLS4yNjctMi4yNjYtLjgtLjU0NC0uNTM0LS44MTYtMS4yOS0uODE2LTIuMjY3IDAtMS4wMDcuMjUxLTEuNzg1Ljc1NC0yLjMzNC41MDQtLjU1IDEuMTk5LS44MjUgMi4wODctLjgyNS44NDggMCAxLjUxLjI0MiAxLjk4Mi43MjUuNDczLjQ4NC43MDkgMS4xNTIuNzA5IDIuMDA0di43OTVoLTMuODczYy4wMTguNDY1LjE1Ni44MjkuNDE0IDEuMDkuMjU4LjI2MS42Mi4zOTIgMS4wODUuMzkyLjM2MSAwIC43MDMtLjAzNyAxLjAyNi0uMTEzYTUuMTMzIDUuMTMzIDAgMCAwIDEuMDEtLjM2djEuMjY4Yy0uMjg3LjE0My0uNTkzLjI1LS45Mi4zMmE1Ljc5IDUuNzkgMCAwIDEtMS4xOTIuMTA0em01LjgwMyAwYy0uNzA2IDAtMS4yNjMtLjI3NS0xLjY2My0uODIyLS40MDMtLjU0OC0uNjA0LTEuMzA3LS42MDQtMi4yNzggMC0uOTg0LjIwNS0xLjc1Mi42MTUtMi4zMDEuNDEtLjU1Ljk3NS0uODI1IDEuNjk1LS44MjUuNzU1IDAgMS4zMzIuMjk0IDEuNzI5Ljg4MWguMDU0YTYuNjk3IDYuNjk3IDAgMCAxLS4xMjQtMS4xOTh2LTEuOTIyaDEuNjQ0VjI0SDQ2LjQzbC0uMzE3LS43NzloLS4wN2MtLjM3Mi41OTEtLjk0Ljg4Ni0xLjcwMi44ODZ6bS41NzQtMS4zMDZjLjQyIDAgLjcyNi0uMTIxLjkyMS0uMzY1LjE5Ni0uMjQzLjMwMi0uNjU3LjMyLTEuMjR2LS4xNzhjMC0uNjQ0LS4xLTEuMTA2LS4yOTgtMS4zODYtLjE5OS0uMjc5LS41MjItLjQxOS0uOTctLjQxOWEuOTYyLjk2MiAwIDAgMC0uODUuNDY1Yy0uMjAzLjMxLS4zMDQuNzYtLjMwNCAxLjM1IDAgLjU5Mi4xMDIgMS4wMzUuMzA2IDEuMzMuMjA0LjI5Ni40OTYuNDQzLjg3NS40NDN6bTEwLjkyMi00LjkyYy43MDkgMCAxLjI2NC4yNzcgMS42NjUuODMuNDAuNTUzLjYwMSAxLjMxMi42MDEgMi4yNzUgMCAuOTkyLS4yMDYgMS43Ni0uNjIgMi4zMDR-. . . (truncated for brevity) ... 
`  // <-- End of large snippet

export default function PrivacyPolicy() {
  return (
    <div className={`min-h-screen bg-gradient-to-b from-[#F6F4F9] to-white ${lexend.className}`}>
      {/* 2) Put the custom CSS rules in a global <style jsx> block. */}
      <style jsx global>{`
        [data-custom-class='body'], [data-custom-class='body'] * {
          background: transparent !important;
        }
        [data-custom-class='title'], [data-custom-class='title'] * {
          font-family: Arial !important;
          font-size: 26px !important;
          color: #000000 !important;
        }
        [data-custom-class='subtitle'], [data-custom-class='subtitle'] * {
          font-family: Arial !important;
          color: #595959 !important;
          font-size: 14px !important;
        }
        [data-custom-class='heading_1'], [data-custom-class='heading_1'] * {
          font-family: Arial !important;
          font-size: 19px !important;
          color: #000000 !important;
        }
        [data-custom-class='heading_2'], [data-custom-class='heading_2'] * {
          font-family: Arial !important;
          font-size: 17px !important;
          color: #000000 !important;
        }
        [data-custom-class='body_text'], [data-custom-class='body_text'] * {
          color: #595959 !important;
          font-size: 14px !important;
          font-family: Arial !important;
        }
        [data-custom-class='link'], [data-custom-class='link'] * {
          color: #3030F1 !important;
          font-size: 14px !important;
          font-family: Arial !important;
          word-break: break-word !important;
        }
      `}</style>

      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="prose prose-lg max-w-none">
          {/*  
            3) Insert the big snippet as raw HTML. 
            Remember that dangerouslySetInnerHTML should come from a trusted source.
            If you do not trust the HTML, sanitize it first. 
          */}
          <div dangerouslySetInnerHTML={{ __html: htmlSnippet }} />
        </div>
      </div>
    </div>
  )
}