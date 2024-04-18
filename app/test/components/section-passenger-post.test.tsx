import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import SectionPasengerPost from '@mitimiti/components/section-passenger-post';
import { format } from '@formkit/tempo';

const posts = [
  {
    id: '401690e3-7493-4c2e-a470-b3910225b48a',
    passengerUid: 'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
    fromTrip: 'Medellín, Medellin, Antioquia, Colombia',
    toTrip: 'Manizales, Caldas, Colombia',
    dateTrip: '2024-04-06T00:45:04.000Z',
    askingSeats: 2,
    user: {
      userUid: 'b5b49cef-2225-4bd0-8f3c-3ba5cd96d961',
      name: 'Tobias de GoingTube',
      profilePicture:
        'https://goingtube-photo-user-dev.s3.amazonaws.com/Cs2f7ElskeZL9lp08soc4YhcbhV2/Cs2f7ElskeZL9lp08soc4YhcbhV2.JPG',
    },
  },
  {
    id: '8af4efa5-7b0b-4ecf-b841-94894fb29488',
    passengerUid: '62a0f0db-9061-4404-9731-30f929c86487',
    fromTrip: 'Cali, Valle del Cauca, Colombia',
    toTrip: 'Popayán, Cauca, Colombia',
    dateTrip: '2024-04-06T00:45:04.000Z',
    askingSeats: 1,
    user: {
      userUid: '62a0f0db-9061-4404-9731-30f929c86487',
      name: 'John Agudelo',
      profilePicture:
        'https://lh3.googleusercontent.com/-G_kkF1P8qCI/AAAAAAAAAAI/AAAAAAAAAAA/AKF05nBvMo6H7867kJAiaanvGpz9yRMo9g/s300-c/photo.jpg',
    },
  },
  {
    id: '94e49ab0-e205-45ad-b4a1-5a571197211b',
    passengerUid: '6854cc10-39d0-44e4-b19a-2794eb6b4aff',
    fromTrip: 'Bogota, Colombia',
    toTrip: 'Pereira, Risaralda, Colombia',
    dateTrip: '2024-04-06T00:45:04.000Z',
    askingSeats: 2,
    user: {
      userUid: '6854cc10-39d0-44e4-b19a-2794eb6b4aff',
      name: 'JOHN ALEXANDER AGUDELO GALEANO',
      profilePicture:
        'https://lh3.googleusercontent.com/a-/AOh14Ggq2spWlGtNtNCuIZeHJFzy948kkeEw6FeSdxRwMg',
    },
  },
  {
    id: '0fd75312-8065-4851-b588-13974e2fe6d1',
    passengerUid: '37ac4e0b-55f1-4b23-a08a-1c7283bad0ca',
    fromTrip: 'Manizales, Caldas, Colombia',
    toTrip: 'Medellín, Medellin, Antioquia, Colombia',
    dateTrip: '2024-04-06T00:45:04.000Z',
    askingSeats: 3,
    user: {
      userUid: '37ac4e0b-55f1-4b23-a08a-1c7283bad0ca',
      name: 'ANDRES FELIPE AGUDELO GALEANO',
      profilePicture:
        'https://lh3.googleusercontent.com/-QmnGL_dU684/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJP0jE_SJBfkw9Faf8NbXL64Qai0TQ/s300-c/photo.jpg',
    },
  },
  {
    id: 'c8fbc62d-c5a9-49f2-826e-f899601cdabf',
    passengerUid: 'e4861323-e8f8-4b6e-8b1e-5160b3a2681f',
    fromTrip: 'Valledupar, Cesar, Colombia',
    toTrip: 'Cali, Valle del Cauca, Colombia',
    dateTrip: '2024-04-06T00:45:04.000Z',
    askingSeats: 1,
    user: {
      userUid: 'e4861323-e8f8-4b6e-8b1e-5160b3a2681f',
      name: 'C Perez Cardona',
      profilePicture:
        'https://graph.facebook.com/10155144223885028/picture?width=400',
    },
  },
  {
    id: 'faa5cdb8-0d8a-440e-888d-fed084eaf879',
    passengerUid: '857d2e15-869a-4c5c-9c52-9f1e476ec099',
    fromTrip: 'Manizales, Caldas, Colombia',
    toTrip: 'Medellín, Medellin, Antioquia, Colombia',
    dateTrip: '2024-04-06T00:45:04.000Z',
    askingSeats: 1,
    user: {
      userUid: '857d2e15-869a-4c5c-9c52-9f1e476ec099',
      name: 'Cristian Camilo Pérez Cardona',
      profilePicture:
        'https://goingtube-photo-user-dev.s3.amazonaws.com/r3NzPkDNbwW373K8QR57kajDqbg2/r3NzPkDNbwW373K8QR57kajDqbg2.JPG',
    },
  },
];

describe('component', () => {
  test('render component correctly', () => {
    render(<SectionPasengerPost postsPassenger={[]} />);
    expect(screen.getByText(/Pasajeros esta semana.../)).toBeTruthy();
  });

  test('render empty post', () => {
    render(<SectionPasengerPost postsPassenger={[]} />);

    const sectionElements = screen.getByTestId('posts-passenger');
    expect(sectionElements.children.length).toBe(0);
  });

  test('render all passenger posts', () => {
    render(<SectionPasengerPost postsPassenger={posts} />);

    const sectionElements = screen.getByTestId('posts-passenger');
    expect(sectionElements.children.length).toBe(posts.length);
  });

  test('render post with data correctly', () => {
    render(<SectionPasengerPost postsPassenger={posts} />);
    const firstPost = posts[0];

    const passengerPosts = screen.getByTestId('posts-passenger');
    const passengerPost = passengerPosts.children[0];

    const titleDate = passengerPost.querySelector('h3')?.textContent;
    const userName = passengerPost.querySelector('h6')?.textContent;
    const fromTrip = passengerPost
      .querySelector('div[data-testid="post-from-trip"]')
      ?.querySelector('p')?.textContent;
    const toTrip = passengerPost
      .querySelector('div[data-testid="post-to-trip"]')
      ?.querySelector('p')?.textContent;
    const seats = passengerPost
      .querySelector('div[data-testid="post-seats"]')
      ?.querySelector('p')?.textContent;

    expect(titleDate).toBe(
      format(new Date(firstPost.dateTrip), { date: 'full' })
    );
    expect(userName).toBe(firstPost.user?.name);
    expect(fromTrip).toBe(
      `${format(firstPost.dateTrip, { time: 'short' })} - ${firstPost.fromTrip}`
    );
    expect(toTrip).toBe(` - ${firstPost.toTrip}`);
    expect(seats).toBe(`${firstPost.askingSeats} pasajeros`);
  });
});
