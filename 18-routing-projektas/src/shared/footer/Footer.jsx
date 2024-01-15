import './Footer.css'

const Footer = () => {
  const socialsIcons = [
    {
      title: 'youtube',
      iconUrl: 'src/assets/socials/youtube.svg',
      iconHref: 'https://www.youtube.com/'
    },
    {
      title: 'facebook',
      iconUrl: 'src/assets/socials/facebook.svg',
      iconHref: 'https://www.facebook.com/'
    },
    {
      title: 'instagram',
      iconUrl: 'src/assets/socials/instagram.svg',
      iconHref: 'https://www.instagram.com/'
    },
    {
      title: 'tiktok',
      iconUrl: 'src/assets/socials/tiktok.svg',
      iconHref: 'https://www.tiktok.com/en/'
    }
  ]

  return (
    <div className="container">
      <footer>
        <div className="footer-left">
          <div className='footer-left-top'>
            <p className='footer-left-title'>Join our Hotel newsletter with news and sales</p>
            <p>Donec et scelerisque quam. Aliquam varius et sapien.</p>

            <form action="#">
              <input type="email" placeholder='Enter your email...' />
              <button type='submit'>SUBMIT</button>
            </form>

            <div>
              <ul>
                {socialsIcons.map((icon, i) =>
                  <li key={i}>
                    <a href={icon.iconHref}>
                      <img src={icon.iconUrl} alt={icon.title} />
                    </a>
                  </li>
                )}
              </ul>
            </div>

          </div>
          <div className='footer-left-bottom'>
            <p>©️2024 Manaus hotel. All Rights Reserved.</p>
          </div>
        </div>

        <div className="footer-right">
          {/* sutvarkyti, kad butu galima paspausti */}
          <ul>
            <li>Booking</li>
            <li>Standard Room</li>
            <li>Superior Room</li>
            <li>Deluxe Room</li>
            <li>Junior Suite</li>
          </ul>

          <ul>
            <li>Hotel</li>
            <li>About</li>
            <li>Contacts</li>
            <li>Careers</li>
            <li>FAQs</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer