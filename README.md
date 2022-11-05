## PROJECT INTRODUCTION ##
We can access GitHub profile details like name, bio, and most recent repository using this web application. This website was just developed to make it simpler for us to view the valid profile by simply knowing the username.Additionally, this functions as a GitHub profile search engine. This web application was made with Pure JavaScript, HTML, and CSS. I fetched the user's information using auxious and the GitHub API.

## TECHNOLOGY USED ##
- HTML
- CSS 
- Pure JavaScript
- API ( https://api.github.com/users/ )
- Fontawesome ( https://fontawesome.com/ )

## HTML STRUCTURE ##
( **`index.html`** )

    body
         form
        -icon (class : githubIcon)
        -input (id : search)

        contentInformation
	        card(class)
		        div.image - (img)

		    userInformation 
                - h2(name)
                - p(bio)
                - ul.profileInteraction
					-li(Followers)
                    -li(Following)
                    -li(Reposorities)

				div.profleRepos(id)
					-a(repository)
                    -a(repository)
					-a(repository)

## JAVASCRIPT BREAKDOWN ##
**`( script.js )`**

   - First, the `const` and variables were declared using `getElementById`.
   - A `getuser(username)` function is created that will take a username as a parameter and retrieve that user's data, which includes everything related to a publicly accessible GitHub profile.
        - Simultaneously, this will handle the error `[catch(error)]` if the user enters a username that does not exist.

   - To retrieve the repository details of a specific user, a `getRespositry(username)` function is created. At the same time, the error is handled.

   - A function called `userCard()` is created. If we successfully received the data by using the `getuser()` function, this function will update the page (via ``innerHTML``) with an HTML card containing all of the user's information.

   - To handle any type of error as smoothly as possible, a function called `createErrorMSG()` is created that will update the page using the `innerHTML` tag about what's exactly wrong with this page and is called inside `getuser()` and `getRespositry()`. Errors can occur when a user does not exist or when retrieving repository details.

   - Previously, we obtained repository information by using the `getRespositry()` function. After obtaining the repo details, I created another function called `addRepoInsideCard()` to update the most recent repository using the `innerHTML`tag.

        - Normally, the GitHub API returns all repository details at once, but I used `slice(0,10)` to get the first ten repositories and `'username + '/repos?sort=created'` to get the most recent repository details.





## SCREENSHOTS ##
**01**
![Screenshot (2140)](https://user-images.githubusercontent.com/88100576/200123688-fdae41b8-38ae-4b40-85d9-45d4f52b9a76.png)
**02**
![Screenshot (2141)](https://user-images.githubusercontent.com/88100576/200123689-95952354-df65-4d09-8b2f-6e4ee0512f06.png)


## CREATED BY ##
Arup Mondal [@mondalCodeHub](https://www.github.com/mondalCodeHub)
