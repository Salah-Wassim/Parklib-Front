// import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react-native';
// import axios from 'axios';

// import InputAddressAutocomplete from './InputAddressAutocomplete';

// // Mock de la fonction axios.get pour simuler la requête HTTP
// jest.mock('axios');

// describe('InputAddressAutocomplete', () => {
//   test('affiche les résultats de recherche lors de la saisie de texte', async () => {
//     // Mock de la réponse de la requête HTTP
//     const response = {
//       data: {
//         features: [
//           {
//             properties: {
//               name: 'Adresse 1',
//               city: 'Ville 1',
//               postcode: '12345',
//               label: 'Adresse 1, Ville 1, 12345',
//             },
//           },
//           {
//             properties: {
//               name: 'Adresse 2',
//               city: 'Ville 2',
//               postcode: '67890',
//               label: 'Adresse 2, Ville 2, 67890',
//             },
//           },
//         ],
//       },
//     };

//     // Mock de la fonction axios.get pour renvoyer la réponse simulée
//     axios.get.mockResolvedValue(response);

//     const onChooseAddressMock = jest.fn();

//     const { getByPlaceholderText, getAllByTestId } = render(
//       <InputAddressAutocomplete onChooseAddress={onChooseAddressMock} />
//     );

//     const input = getByPlaceholderText('Rechercher une adresse, une rue, etc...');

//     // Saisie de texte dans l'input
//     fireEvent.changeText(input, 'Adresse');

//     // Vérification que la requête HTTP a été appelée avec le bon texte
//     expect(axios.get).toHaveBeenCalledWith(
//       'https://api-adresse.data.gouv.fr/search/?q=Adresse'
//     );

//     // Attendre que les résultats de recherche soient affichés
//     await waitFor(() => expect(getAllByTestId('address-result')).toHaveLength(2));

//     // Clic sur un résultat de recherche
//     fireEvent.press(getAllByTestId('address-result')[0]);

//     // Vérification que la fonction onChooseAddress a été appelée avec les bonnes données
//     expect(onChooseAddressMock).toHaveBeenCalledWith(response.data.features[0]);

//     // Vérification que la valeur de l'input a été mise à jour avec l'adresse choisie
//     expect(input.props.value).toBe(response.data.features[0].properties.label);
//   });
// });
