import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/authContext'
import { DataContext } from '../context/dataContext'
import PresentationArea from '../components/presentationArea'
import FaqMainTitles from '../components/faqMainTitles'

import AddNewQuestion from '../components/addNewQuestion'
import SearchArea from '../components/searchArea'
import Title from '../components/title'
import { Paper } from '@mui/material'

export default function FaqPage() {
  const [LoggedIn] = useContext(AuthContext)
  const [faqData, setfaqData] = useContext(DataContext)
  useEffect(() => {
    fetch('/getFaqData')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setfaqData(data.data)
        }
      })
  }, [])
  return (
    <Paper sx={{ boxShadow: 3, margin: 2, padding: 2 }}>
      <PresentationArea title="FAQs" subTitle="Questions fréquemment posées" />
      <SearchArea />
      {LoggedIn ? (
        <AddNewQuestion/>
      ) : (
        <></>
      )}
      <Title title={'Choisissez votre thématique'} />
      <FaqMainTitles
        title="1. Envoyer un colis"
        content={
          faqData
            ? faqData.hasOwnProperty('Envoyer un colis')
              ? faqData['Envoyer un colis']
              : []
            : []
        }
      />
      <FaqMainTitles
        title="2. Envoyer un courrirer"
        content={
          faqData
            ? faqData.hasOwnProperty('Envoyer un courrirer')
              ? faqData['Envoyer un courrirer']
              : []
            : []
        }
      />
      <FaqMainTitles
        title="3. Envoyer un objet de valeur"
        content={
          faqData
            ? faqData.hasOwnProperty('Envoyer un objet de valeur')
              ? faqData['Envoyer un objet de valeur']
              : []
            : []
        }
      />
      <FaqMainTitles
        title="4. Donner procuration"
        content={
          faqData
            ? faqData.hasOwnProperty('Donner procuration')
              ? faqData['Donner procuration']
              : []
            : []
        }
      />
    </Paper>
  )
}
