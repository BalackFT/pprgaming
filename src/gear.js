// Gaming gear for /gear/. Swap an item by changing its name + ASIN (amazon.com/dp/ASIN).
// No prices or Amazon-hosted images, per Amazon Associates rules.
export const MY_GEAR = [
  { cat: 'Flight controls', name: 'Logitech G X56 H.O.T.A.S. (Saitek X56 Rhino)', asin: 'B079P6SSHP',
    blurb: 'A full stick-and-throttle set made for space sims. The stick has a mini analog thumbstick for strafing, the split twin throttles and stacks of hats and rotaries take a lot of Star Citizen bindings, and you can swap the springs to change how stiff the stick feels.' },
  { cat: 'Keyboard', name: 'Logitech G910 Orion Spectrum', asin: 'B01GAONOAC',
    blurb: 'A full-size mechanical board with nine programmable G-keys and per-key RGB. The extra macro keys and the lighting profiles are handy for keeping track of the many ship, mining and on-foot keybinds in Star Citizen.' },
  { cat: 'Mouse', name: 'Logitech G502 X PLUS Wireless RGB (Black)', asin: 'B092CB69Q4',
    blurb: 'The wireless, RGB version of the G502 X, with LIGHTSPEED wireless, LIGHTFORCE hybrid optical-mechanical switches, 13 programmable controls and USB-C charging (POWERPLAY wireless charging compatible). No cable drag while you move between stick and mouse, and the free-spin/ratchet wheel works well for throttle or power-triangle adjustments.' },
  { cat: 'Headset', name: 'Logitech G PRO X Wireless Lightspeed (Black)', asin: 'B081PP4CB6',
    blurb: 'LIGHTSPEED wireless with 20+ hours of battery, 50 mm PRO-G drivers and DTS Headphone:X 2.0 virtual surround to help you tell where ships and gunfire are coming from. The Blue VO!CE mic filter keeps party and org comms clear, and with no cable you can lean back or step away from the desk mid-flight.' },
];
export const RECOMMENDED = [
  { group: 'HOTAS & flight sticks', items: [
    { tier: 'Budget', name: 'Thrustmaster T.Flight HOTAS One', asin: 'B07643TW2V',
      blurb: 'An affordable starter HOTAS for PC and Xbox, with a detachable throttle and twist/rocker rudder. Good for trying stick flying before you spend more.' },
    { tier: 'Mid-range', name: 'Thrustmaster T.16000M FCS HOTAS', asin: 'B01H6KXGDY',
      blurb: 'A long-time space-sim favorite: a Hall-effect (H.E.A.R.T.) magnetic-sensor stick for precise aim, an ambidextrous design, and the TWCS throttle with a mini-stick and rocker.' },
    { tier: 'High-end', name: 'Thrustmaster HOTAS Warthog', asin: 'B00371R8P4',
      blurb: 'An all-metal replica of the A-10C stick and dual throttle with 55 programmable buttons. Heavy, durable and built for a dedicated sim setup.' },
  ]},
  { group: 'Gaming mice', items: [
    { tier: 'Budget', name: 'Razer Basilisk V3 (wired)', asin: 'B097F8H1MC',
      blurb: 'An ergonomic wired mouse with 11 programmable buttons and a HyperScroll tilt wheel. Lots of bindable buttons for not much money.' },
    { tier: 'MMO / many buttons', name: 'Corsair Scimitar RGB Elite (wired)', asin: 'B082LRMY53',
      blurb: 'A 12-button side panel that slides to fit your thumb. Useful if you would rather bind ship and mobiGlas functions on the mouse.' },
    { tier: 'High-end', name: 'Logitech G PRO X Superlight 2', asin: 'B09NBWL8J5',
      blurb: 'An ultra-light (about 60 g) wireless esports mouse with the HERO 2 sensor. Best for fast FPS aiming and less so for heavy keybinding.' },
  ]},
  { group: 'Gaming keyboards', items: [
    { tier: 'Budget', name: 'HyperX Alloy Origins Core (TKL)', asin: 'B07YMHGP86',
      blurb: 'A compact tenkeyless mechanical board in an aluminum body. Leaves more desk room for a stick and throttle.' },
    { tier: 'Mid-range', name: 'Razer BlackWidow V4', asin: 'B0C6RK64Z2',
      blurb: 'A full-size mechanical board with six dedicated macro keys, a multi-function roller and a magnetic wrist rest.' },
    { tier: 'High-end', name: 'SteelSeries Apex Pro TKL Wireless', asin: 'B0BF64DN6H',
      blurb: 'Adjustable-actuation OmniPoint magnetic switches, an OLED screen and wireless or USB-C connection, in a tenkeyless layout.' },
  ]},
];
