import React from "react";

export default function Navbar()
{
    return(
        <>
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">CMS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/AddCourse">Committee work</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/addFaculty">HOD Work</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/addHand">Faculty work</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/studentForm">Student Form</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/courseDetails">Course Details</a>
        </li>
    
      </ul>
    
    </div>
  </div>
</nav>
        </>
    )
}