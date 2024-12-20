
import CircleIcon from '@mui/icons-material/Circle';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import janeProfile from '@/public/images/jane.webp';
import allanProfile from '@/public/images/allanmunger.jpg';
import samanthaProfile from '@/public/images/samanthagreen.jpg';
import michaelProfile from '@/public/images/michaelcharter.jpg';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import decisionIcon from '@/public/images/decison maker.jpg';
import Image from 'next/image';

const leads = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Winford Asher',
    topic: 'Cafe A 100 commercial use',
    status: 'new',
    date: '2024-02-04',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Josia Love',
    topic: 'Upgrading service plan',
    status: 'new',
    date: '2024-03-30',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Harrison Curtis',
    topic: 'Issue with throughput on EspressoMaster',
    status: 'new',
    date: '2024-03-28',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Jermaine Berrett',
    topic: 'New roaster in distribution facility',
    status: 'new',
    date: '2024-03-25',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Gerald Stephens',
    topic: 'Concern on current machines',
    status: 'new',
    date: '2024-03-23',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Haile Griffiths',
    topic: 'Expanding business',
    status: 'new',
    date: '2024-03-21',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Rachael Michael',
    topic: 'Addressing service concerns',
    status: 'new',
    date: '2024-03-19',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Alex Baker',
    topic: 'Premium coffee beans',
    status: 'new',
    date: '2024-03-17',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Lilly Pyles',
    topic: 'Cafe A 100 bulk rate',
    status: 'new',
    date: '2024-03-13',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Jane Reyes',
    topic: 'Improving cost by cup',
    status: 'new',
    date: '2024-03-10',
  },
  {
    id: '4832AB23-1A7F-412C-91B3-2A67D9E7B3B9',
    name: 'Peter White',
    topic: 'Custom coffee blends for office',
    status: 'new',
    date: '2024-03-05',
  },
  {
    id: '5D9B2C14-8FC9-4D4B-939A-C6A76C0E3D1D',
    name: 'Sophia Lang',
    topic: 'Scheduling a product demo',
    status: 'new',
    date: '2024-02-27',
  },
  {
    id: 'F7E32B6A-C0A1-4692-8DF8-9C676A8E5B3D',
    name: 'Lucas Brown',
    topic: 'Inquiry about Espresso Pro XL',
    status: 'new',
    date: '2024-02-20',
  },
  {
    id: '19D83B7A-8CE3-435B-AF72-C9A70E9D5B3F',
    name: 'Emma Taylor',
    topic: 'Discussing eco-friendly packaging',
    status: 'new',
    date: '2024-02-15',
  },
  {
    id: '9AB47D8A-23F8-4E49-8C19-C8A76D7B3E9D',
    name: 'Oliver Davis',
    topic: 'Replacing older machines',
    status: 'new',
    date: '2024-02-10',
  },
];



const leadsCarousel = [
  {
    name: 'Jane Reyes',
    image: janeProfile,
    description: () => (
      <>
        COO <CircleIcon sx={{ marginTop: '-8px', fontSize: '5px', color: '#888888' }} /> Engage Northwind Traders
      </>
    ),
    taskheader: () => (
      <>
        <MarkEmailUnreadOutlinedIcon sx={{ fontSize: '20px' }} /> Engage with Jane Reyes
      </>
    ),
    task: 'Jane may be interested in upgrading espresso machines for her in-store coffee shop.',
    display: () => (
      <>
        Expand business <CircleIcon sx={{ marginTop: '-8px', fontSize: '5px', color: '#888888' }} /> High buying intent
      </>
    ),
    quality: () => (
      <ul>
        <li className="text-xs list-disc ml-5">
          Jane is a <b>key decision maker</b> and was browsing <b>&apos;espresso machines&apos;</b> on First Coffee's website. &emsp;
          <span className="text-[10px] bg-white p-[2px]">1</span>
        </li>
        <li className="text-xs list-disc ml-5">
          Multiple people at her company have reported 'slowness' during <b>service request</b> &emsp;
          <span className="text-[10px] bg-white p-[2px]">2</span>
        </li>
        <li className="text-xs list-disc ml-5">
          Northwind Traders currently see <b>$200M in revenue</b> from their in-store coffee shops. &emsp;&emsp;
          <span className="text-[10px] bg-white p-[2px]">3</span>
        </li>
      </ul>
    ),
    decision: () => (
      <div className='flex gap-3'>
          <Image
          alt='decision icon'
          src={decisionIcon}
          width={45}
          height={45}
          />
      <div>
        <p className="text-xs font-semibold">Decision maker</p>
        <p className="text-[#3d56ce] font-semibold">Yes</p>
      </div>
    </div>  
    ),
    deal: () => (
      <>
        <p className="text-xs font-semibold">Potential deal value</p>
        <p className="text-[#3d56ce] font-semibold">$1M</p>
      </>
    ),
    intent: () => (
      <>
        <p className="text-xs font-semibold">Intent</p>
        <p className="text-[#3d56ce] font-semibold">High</p>
      </>
    ),
    about: () => (
      <>
        Jane Reyes, the Chief Operating Officer of Northwind Traders, is a dynamic leader with a proven track record in
        optimizing operations and enhancing customer experiences. Under her guidance, Northwind Traders' in-store coffee
        shops have flourished, becoming a hallmark of quality and innovation. Jane's commitment to excellence makes her
        an ideal partner for First Coffee. She is always seeking top-tier equipment to elevate her coffee shops'
        offerings, ensuring consistent, high-quality services.
      </>
    ),
  },
  {
    name: 'Allan Munger',
    image: allanProfile,
    description: () => (
      <>
        Head of Real Estate Development <CircleIcon sx={{ marginTop: '-8px', fontSize: '5px', color: '#888888' }} /> Contosso Coffee
      </>
    ),
    taskheader: () => (
      <>
        <CalendarMonthOutlinedIcon sx={{ fontSize: '18px', marginTop: '-4px' }} /> Prepare for meeting with Allan
      </>
    ),
    task: 'Prepare for high buying intent meeting Copilot scheduled for 2 PM regarding upgrading service contract.',
    display: () => (
      <>
        Upcoming meeting <CircleIcon sx={{ marginTop: '-8px', fontSize: '5px', color: '#888888' }} /> Due today
      </>
    ),
    quality: () => (
      <ul>
        <li className="text-xs list-disc ml-5">
          Allan has overseen <b>real estate expansions</b> for Contosso Coffee, including new locations. &emsp;
          <span className="text-[10px] bg-white p-[2px]">1</span>
        </li>
        <li className="text-xs list-disc ml-5">
          Recently expressed interest in streamlining <b>contract processes</b>. &emsp;
          <span className="text-[10px] bg-white p-[2px]">2</span>
        </li>
        <li className="text-xs list-disc ml-5">
          Contosso Coffee is experiencing rapid growth with <b>50 new locations</b> planned this year. &emsp;
          <span className="text-[10px] bg-white p-[2px]">3</span>
        </li>
      </ul>
    ),
    decision: () => (
      <div className='flex gap-3'>
          <Image
          alt='decision icon'
          src={decisionIcon}
          width={45}
          height={45}
          />
      <div>
      <p className="text-xs font-semibold">Decision maker</p>
      <p className="text-[#3d56ce] font-semibold">Partial</p>
      </div>
    </div>  
    ),
    deal: () => (
      <>
        <p className="text-xs font-semibold">Potential deal value</p>
        <p className="text-[#3d56ce] font-semibold">$800K</p>
      </>
    ),
    intent: () => (
      <>
        <p className="text-xs font-semibold">Intent</p>
        <p className="text-[#3d56ce] font-semibold">Medium</p>
      </>
    ),
    about: () => (
      <>
        Allan Munger leads Contosso Coffee's real estate division, managing their rapid expansion into new markets. His
        strategic oversight ensures that each new location maximizes operational efficiency and customer satisfaction.
        Allan is actively exploring partnerships that can enhance their infrastructure.
      </>
    ),
  },
  {
    name: 'Samantha Green',
    image: samanthaProfile,
    description: () => (
      <>
        Sales Manager <CircleIcon sx={{ marginTop: '-8px', fontSize: '5px', color: '#888888' }} /> Starbucks Global
      </>
    ),
    taskheader: () => (
      <>
        <PhoneEnabledOutlinedIcon sx={{ fontSize: '18px', marginTop: '-4px' }} /> Follow up with Samantha
      </>
    ),
    task: 'Discuss scaling Starbucks’ regional distribution with Samantha, focusing on logistics.',
    display: () => (
      <>
        High-value lead <CircleIcon sx={{ marginTop: '-8px', fontSize: '5px', color: '#888888' }} /> Priority task
      </>
    ),
    quality: () => (
      <ul>
        <li className="text-xs list-disc ml-5">
          Samantha has <b>global sales expertise</b> and oversees Starbucks' regional logistics. &emsp;
          <span className="text-[10px] bg-white p-[2px]">1</span>
        </li>
        <li className="text-xs list-disc ml-5">
          Focused on scaling distribution for <b>high-demand products</b>. &emsp;
          <span className="text-[10px] bg-white p-[2px]">2</span>
        </li>
      </ul>
    ),
    decision: () => (
            <div className='flex gap-3'>
            <Image
            alt='decision icon'
            src={decisionIcon}
            width={45}
            height={45}
            />
        <div>
        <p className="text-xs font-semibold">Decision maker</p>
              <p className="text-[#3d56ce] font-semibold">Yes</p>
        </div>
      </div>  
    ),
    deal: () => (
      <>
        <p className="text-xs font-semibold">Potential deal value</p>
        <p className="text-[#3d56ce] font-semibold">$1.5M</p>
      </>
    ),
    intent: () => (
      <>
        <p className="text-xs font-semibold">Intent</p>
        <p className="text-[#3d56ce] font-semibold">High</p>
      </>
    ),
    about: () => (
      <>
         Samantha Green, a Sales Manager at Starbucks Global, specializes in optimizing supply chains and driving revenue through innovative strategies. Her work has been pivotal in expanding Starbucks' regional distribution networks. Samantha’s focus on achieving consistent growth and her collaborative approach position her as a key player in shaping Starbucks' success. Her dedication to operational excellence aligns perfectly with First Coffee’s mission.
      </>
    ),
  },
  {
    name: 'Michael Carter',
    image: michaelProfile,
    description: () => (
      <>
        Chief Operations Officer <CircleIcon sx={{ marginTop: '-8px', fontSize: '5px', color: '#888888' }} /> Blue Bean Roasters
      </>
    ),
    taskheader: () => (
      <>
        <EmailOutlinedIcon sx={{ fontSize: '18px', marginTop: '-4px' }} /> Review Michael’s email
      </>
    ),
    task: 'Michael has requested a breakdown of cost efficiencies for upgrading roasting equipment.',
    display: () => (
      <>
        Review document <CircleIcon sx={{ marginTop: '-8px', fontSize: '5px', color: '#888888' }} /> Pending response
      </>
    ),
    quality: () => (
      <ul>
        <li className="text-xs list-disc ml-5">
          Michael leads <b>Blue Bean Roasters' operations</b>, focusing on innovation and efficiency. &emsp;
          <span className="text-[10px] bg-white p-[2px]">1</span>
        </li>
        <li className="text-xs list-disc ml-5">
          Currently evaluating <b>cost-saving measures</b> for production. &emsp;
          <span className="text-[10px] bg-white p-[2px]">2</span>
        </li>
      </ul>
    ),
    decision: () => (
      <div className='flex gap-3'>
        <Image
        alt='decision icon'
        src={decisionIcon}
        width={45}
        height={45}
            />
        <div>
        <p className="text-xs font-semibold">Decision maker</p>
              <p className="text-[#3d56ce] font-semibold">Partial</p>
        </div>
      </div>  
    ),
    deal: () => (
      <>
        <p className="text-xs font-semibold">Potential deal value</p>
        <p className="text-[#3d56ce] font-semibold">$700K</p>
      </>
    ),
    intent: () => (
      <>
        <p className="text-xs font-semibold">Intent</p>
        <p className="text-[#3d56ce] font-semibold">Medium</p>
      </>
    ),
    about: () => (
      <>
        Michael Carter, the Chief Operations Officer of Blue Bean Roasters, has a strong background in optimizing operations and driving cost efficiency. His efforts have significantly improved Blue Bean’s production processes, ensuring top-quality roasts at competitive costs. Michael’s commitment to innovation and quality improvement makes him a valuable collaborator for First Coffee. His dedication to enhancing operations perfectly aligns with First Coffee’s goals.
      </>
    ),
  },
];


  export {leads, leadsCarousel}