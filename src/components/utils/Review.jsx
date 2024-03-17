import React from 'react';

const ReviewForm = () => {
  return (
    <center className="w- py-12">
      <div className="container grid max-w-6xl items-center gap-6 px-4 space-y-6">
        <div className="space-y-6">
          <h2 className="text-5xl font-semibold  text-gradient mt-10   tracking-tight">Submit your review</h2>
          <p className="max-w-[600px] font-semibold text-gray-900">
            We appreciate your feedback. Share your experience with our platform.
          </p>
        </div>
        <form className="grid gap-6 sm:grid-cols-2">
          <div className="grid sm:flex ">
            <label htmlFor="name" className=" font-semibold  leading-none peer-disabled:cursor-not-allowed m-2 text-2xl peer-disabled:opacity-70">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="flex h-10 w-full rounded-md border-4 border-gray-400  bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Enter your name"
            />
          </div>
          <div className="grid sm:flex ">
            <label htmlFor="school" className=" font-semibold  text-3xl leading-none peer-disabled:cursor-not-allowed m-1 peer-disabled:opacity-70">
              School:
            </label>
            <input
              type="text"
              id="school"
              className="flex h-10 w-full rounded-md border-[3px] border-gray-400 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Enter your school"
            />
          </div>
          <div className="sm:flex grid gap-2">
            <label htmlFor="review" className="m-1 font-semibold  text-2xl leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Review:
            </label>
            <textarea
              id="review"
              className="flex w-full rounded-md border-4 border-gray-400  bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[150px] resize-none"
              placeholder="Enter your review"
            />
          </div>
          <div className="flex items-start gap-4">
           
            <label >
              <div
              htmlFor="file"
                className="flex items-center justify-center align-middle whitespace-nowrap  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-4 border-gray-400  font-semibold   bg-background hover:bg-accent hover:text-accent-foreground px-4 py-2 h-auto rounded-md  ml-[12vw]  "
              >
                Upload your image
              </div>
            </label>
            <input
              type="file"
              id="file"
              className="h-10 w-full rounded-md border-4 border-gray-400  bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 hidden" 
            />
          </div>
          <div className="border-t grid border-gray-200 dark:border-gray-800 items-center py-6">
            <button
              type="button" 
              className="inline-flex items-center  justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 bg-black text-white px-8 rounded-full "
            >
              Submit review
            </button>
          </div>
        </form>
      </div>
    </center>
  );}


  export default ReviewForm