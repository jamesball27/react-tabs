const defaultState = {
  0: {
    id: 0,
    header: 'Taking Risks',
    content: '',
    img: 'assets/images/gretzky.jpg'
  },
  1: {
    id: 1,
    header: 'Technology',
    content: `Everyone always wants new things. Everybody likes new inventions,
              new technology. People will never be replaced by machines. In
              the end, life and business are about human connections. And
              computers are about trying to murder you in a lake. And to me
              the choice is easy.`,
    img: null
  },
  2: {
    id: 2,
    header: 'Management Style',
    content: `I told Dwight that there is honor in losing.
              Which, as we all know, is completely ridiculous, but there is,
              however, honor in making a loser feel better which is what I
              just did for Dwight.
              Would I rather be feared or loved? Um,
              easy. Both. I want people to be afraid of how much they love me.`,
    img: null
  },
  3: {
    id: 3,
    header: 'Tough Times',
    content: `Society teaches us that having feelings and crying is bad
              and wrong.Well, that's baloney, because grief isn't wrong.
              There's such a thing as good grief. Just ask Charlie Brown.`,
    img: null
  },
  4: {
    id: 4,
    header: 'Financial Advice',
    content: `I was never in this for the money. But it turns out that the
              money was an absolute necessity for me. I tried to live the dream.
              I tried to have a job, a girlfriend, another job, and I failed.
              But the good thing about the American dream is that you can just
              go to sleep, and try it all again the next night.`,
    img: 'assets/images/bankruptcy.gif'
  },
};


const TabsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    // can add functionality here to add/remove tabs
    default:
      return state;
  }
};

export default TabsReducer;
