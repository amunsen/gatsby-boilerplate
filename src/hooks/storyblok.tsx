import { useEffect, useState } from 'react'
import StoryblokClient from 'storyblok-js-client'

export const sbClient = new StoryblokClient({
  accessToken: 'cxLsWWekVEZP7Qm4b14eLwtt',
  cache: {
    clear: 'auto',
    type: 'memory'
  }
})

export function convertStoryContent(story: { content: string }): any {
  if (story && typeof story.content === 'string') {
    story.content = JSON.parse(story.content)
  }
  return story
}

export function useStoryblok(originalStory: any, location: any) {
  let [story, setStory] = useState(originalStory)

  if (story && typeof story.content === 'string') {
    story.content = JSON.parse(story.content)
  }

  // see https://www.storyblok.com/docs/Guides/storyblok-latest-js
  function initEventListeners() {
    const { StoryblokBridge } = window

    if (typeof StoryblokBridge !== 'undefined') {
      const storyblokInstance = new StoryblokBridge({
        resolveRelations: 'posts-list.posts'
      })

      storyblokInstance.on(['published', 'change'], (event: any) => {
        // reloade project on save an publish
        window.location.reload(true)
      })

      storyblokInstance.on('input', (event: any) => {
        // live updates when editing
        setStory(event.story)
      })

      storyblokInstance.on('enterEditmode', (event: any) => {
        // loading the draft version on initial view of the page
        sbClient
          .get(`cdn/stories/${event.storyId}`, {
            version: 'draft',
            resolve_relations: 'posts-list.posts'
          })
          .then(({ data }) => {
            if (data.story) {
              setStory(data.story)
            }
          })
          .catch((error) => {
            console.log(error)
          })
      })
    }
  }

  function addBridge(callback: any) {
    // check if the script is already present
    const existingScript = document.getElementById('storyblokBridge')
    if (!existingScript) {
      const script = document.createElement('script')
      script.src = `//app.storyblok.com/f/storyblok-v2-latest.js`
      script.id = 'storyblokBridge'
      document.body.appendChild(script)
      script.onload = () => {
        // call a function once the bridge is loaded
        callback()
      }
    } else {
      callback()
    }
  }

  useEffect(() => {
    // load bridge only inside the storyblok editor
    if (location.search.includes('_storyblok')) {
      // first load the bridge and then attach the events
      addBridge(initEventListeners)
    }
  }, []) // it's important to run the effect only once to avoid multiple event attachment

  return story
}
