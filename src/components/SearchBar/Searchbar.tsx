import styled from "styled-components"
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import { devices } from "../../MediaQueries";

const Input = styled.input`
  padding: 2em 2em;
  border: none;
  outline: none;
  font-size: 1.3em;
  color: grey;
  width: 100%;
  border-right: 5px solid #F45E5F;
`

const SearchButton = styled.button`
  width: 20%;
  font-size: 1.2em;
  font-weight: 600;
  background-color: inherit;
  border: none;
  transition: 400ms ease;
  &:hover {
    opacity: 0.7;
    transition: 400ms ease;
    cursor: pointer;
  }
`

const Form = styled.form`
  display: flex;
  background-color: rgb(252,252,254);
  @media only screen and (max-width: ${devices.md}) {
    font-size: 0.9em;
  }
  @media only screen and (max-width: ${devices.sm}) {
    ${SearchButton} {
      width: 40%;
    }
  }
`

type Data = {
    [x: string]: string;
}

type SearchBarProps = {
  className?: string;
}

const Searchbar = ({className}: SearchBarProps) => {
    const { register, handleSubmit } = useForm();
    const router = useRouter()
 
    const OnSubmit  = (data : Data) => {
      router.push(`/track/${data.serialnumber}`)
    }

    return (
        <Form className={className} onSubmit={handleSubmit(OnSubmit)} method="POST" >
            <Input type="text" {...register("serialnumber")} placeholder='Введите до 10 номеров отслеживания...' />
            <SearchButton type="submit">Oтслеживать</SearchButton>
        </Form>
    )
}

export default Searchbar