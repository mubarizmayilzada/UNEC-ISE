import Club from "../../../assets/img/Homepageimg.png";
import ClubImg from "../../../assets/img/clubdetails.png";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Clubsingle = () => {
  const { id } = useParams();
  const [clubData, setClubData] = useState({});
  const [fileName, setFileName] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://test-api.com/api/v1/studentClub/${id}`
        );
        setClubData(response.data);
        setFileName(response.data.file);
      } catch (error) {
        console.error("Error fetching club data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="mb-[80px]">
      <div className="mb-[48px] relative">
        <img className="w-[100%] h-[320px]" src={fileName[0]} alt="" />
        <div className="w-[100%] h-[320px] bg-[#000] opacity-60 absolute top-[0] left-[0]"></div>
        <span className="text-[48px] font-[700] leading-[60px] text-[#FFFDFE] absolute left-[60px] bottom-[37px] font-lato">
          {clubData.title}
        </span>
      </div>
      <section className="mx-[60px]">
        <div className="flex">
          <p className="w-[50%] text-[16px] font-[400] leading-[24px] float-none">
            {/* {clubData.description} */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            natus. Eum illum deleniti nihil eligendi, eaque fugiat ut dolorum,
            voluptatum sapiente labore autem quam. Qui doloribus nisi, ut
            aliquid a ullam molestiae. Reprehenderit sunt rem officia impedit
            sint ipsum velit vero expedita a quisquam, qui esse reiciendis
            eligendi mollitia veniam, molestias ipsa aspernatur perferendis
            laudantium in maiores quae est ipsam. Fugiat, quae corporis magni
            nam eum eveniet voluptatem pariatur? Velit consectetur nihil in, ea
            dolorum odit blanditiis eaque iste ut autem fugit consequuntur odio
            sit sed voluptas ducimus tenetur! Officiis saepe tenetur quas ipsa,
            quis dolores ab architecto fuga? Omnis aliquam enim nemo
            voluptatibus explicabo id ex minima veniam commodi mollitia
            repellendus molestiae, sequi dolore debitis! Rem deserunt doloribus
            ipsa tempora sit sapiente, sint beatae repudiandae molestiae
            suscipit itaque iste impedit voluptas dolore, modi laborum quaerat
            possimus, magnam quisquam! Iusto vero sunt officiis libero molestiae
            id obcaecati accusantium rerum repudiandae laboriosam, vel ab,
            commodi quisquam odio distinctio perspiciatis et fugit maxime
            labore? Accusantium, quibusdam. Reprehenderit corporis quaerat
            assumenda eaque molestias incidunt aut, fugiat repellendus quia. At
            cum minus maiores cupiditate quibusdam velit iste magnam harum
            doloremque nisi, perspiciatis ut inventore recusandae adipisci dolor
            repudiandae ullam est ipsum laboriosam quod nostrum autem soluta
            quis. Earum enim suscipit unde esse facere, fugiat dignissimos
            consequatur, dolor alias impedit ratione deleniti ex quas eos qui ea
            eius et quis dicta eligendi quod! Perferendis unde sed consequatur
            amet quis ullam vero similique rerum. Consequuntur voluptatem
            dolorum ducimus hic eos qui repudiandae dolor pariatur doloribus?
            Reiciendis fuga, natus, quo aperiam quam omnis voluptates possimus
            at mollitia earum magni illo id maiores dicta? Ut non enim mollitia
            veritatis reiciendis deserunt quas voluptas voluptates, qui
            voluptate eos vitae, adipisci temporibus, quasi accusamus! Sed ipsum
            temporibus eos vel fugiat culpa qui ratione consectetur
            consequuntur. Commodi, sint harum! Repudiandae, sed, consequatur
            sapiente laboriosam voluptates unde ex corrupti blanditiis minima
            vero totam a quod accusantium error necessitatibus magni dolor!
            Illum doloremque asperiores distinctio quod saepe quia dolore ex
            atque quibusdam? Vel impedit in quisquam suscipit non eius et
            explicabo, repudiandae illo iusto nihil eos voluptatum libero a.
            Veritatis qui totam molestias velit ea dolorum fuga consectetur
            officia, pariatur odio ullam nulla impedit delectus nemo enim,
            adipisci quidem ipsum, consequuntur sunt! Corrupti error ipsa
            incidunt hic possimus aliquam dolores rerum dignissimos sit nihil
            vitae eligendi in odio voluptatem pariatur sint, iusto eveniet
            voluptates obcaecati tenetur similique? Qui corporis tenetur dolores
            at. Maiores sunt magni cupiditate error impedit expedita alias omnis
            corrupti, assumenda asperiores quas explicabo fuga atque nobis
            similique, et obcaecati. Aliquid, maxime ullam illo facere quae
            laboriosam commodi recusandae pariatur excepturi velit iste ipsa
            vitae reiciendis voluptatum, error minus dolor? Id incidunt
            recusandae at magni, tenetur provident architecto nesciunt, placeat
            culpa, inventore quibusdam numquam? Porro aspernatur, quo eligendi,
            eos quis, est ducimus perspiciatis sed iusto exercitationem dolores
            provident eveniet sequi sapiente accusamus? Corrupti repudiandae
            impedit blanditiis est, magnam cupiditate saepe architecto totam
            tempora fugit, tempore modi expedita similique fuga ipsa laboriosam
            vel nobis voluptate sequi veniam eum cum necessitatibus. Laborum aut
            nostrum minima fuga dolor ea. Facere fugiat molestiae nobis
            obcaecati quidem possimus pariatur accusamus est, nesciunt ipsum
            tempore minima dolorum amet sunt! Tenetur quasi iste in placeat
            quidem velit quod quibusdam id accusantium perspiciatis assumenda et
            accusamus maiores officia possimus corrupti, voluptatum eum optio
            excepturi consectetur ducimus delectus eius officiis mollitia.
            Itaque assumenda quod sit ab, officia consequuntur dolor provident?
            Voluptates ipsam maxime deleniti asperiores iusto voluptatem earum
            ea iure molestiae, autem dolor minus consequuntur expedita illum
            temporibus ex sint. Corporis id cum autem dolorem, vel doloremque
            dolorum itaque soluta tempore temporibus neque qui quasi non
            expedita provident ducimus repellat modi totam dignissimos molestiae
            repudiandae ratione saepe. Quidem facilis eveniet maiores facere ad
            alias tempora ullam praesentium ratione quam officia id veniam amet
            delectus voluptates in sapiente, eos nam eaque nisi mollitia est!
            Dignissimos omnis, fuga facere similique voluptates natus,
            consequatur corrupti, non optio fugiat illo asperiores? Libero sint
            vel incidunt odio? Eius molestiae obcaecati veritatis. Ab deleniti
            odit velit, officiis eveniet, aut cupiditate omnis neque dicta
            quibusdam esse sint ullam voluptatibus quae obcaecati quod
            repudiandae ratione ad culpa illo! Perspiciatis obcaecati sint at ea
            dolores quia quas officiis ex. Dicta voluptatum commodi sit
            aspernatur quidem blanditiis, fugiat provident possimus eveniet
            numquam itaque omnis velit maxime ipsum dolorum cum expedita officia
            vero iste illum molestias quaerat. Est accusantium debitis nostrum
            error voluptate voluptas laudantium ex. Obcaecati fugiat laboriosam
            eum possimus maxime, aspernatur consequatur eaque facere
            voluptatibus officia nam placeat in minima tempore fuga deserunt qui
            ab laudantium eveniet cumque optio! Iure dolorem inventore aut error
            voluptas voluptatem possimus dicta, voluptatibus ullam dolor quia
            doloribus deserunt modi enim eaque autem, praesentium aliquam
            delectus, quibusdam commodi adipisci nostrum sit? Iste aspernatur
            voluptatum ex molestiae, molestias cupiditate delectus non minus
            quibusdam provident dolore in nostrum, expedita possimus explicabo
            tenetur aliquam perferendis fugit dolorum at autem rerum! Laborum
            ipsam explicabo adipisci sed libero nemo, cupiditate culpa quos
            voluptates architecto ad, id corporis error enim magni. Ab, sint
            deserunt, debitis a fuga provident rerum soluta voluptatum assumenda
            deleniti, accusamus nemo aliquam at similique? Consectetur sit nulla
            doloribus, ducimus alias temporibus nam voluptas harum reprehenderit
            consequuntur quod eligendi nobis dignissimos velit facilis quisquam
            repellendus eveniet. Recusandae velit repellendus veniam iure fuga
            tempore non tempora dignissimos fugiat optio nulla animi magni, eum
            a id, quos consectetur beatae, alias vitae minima! Ullam impedit
            quia, aspernatur porro consectetur quae eligendi? Consequuntur
            explicabo voluptas sed, ut fuga optio, minima ipsa magnam
            voluptatem, quaerat reprehenderit itaque aperiam. Soluta aliquid
            reprehenderit ipsa! Repellendus optio explicabo quae incidunt quia
            officiis, ut sit voluptates in distinctio eos placeat minima
            asperiores magni voluptatibus ex quaerat. Possimus id quisquam
            recusandae est tempore nulla dicta repudiandae. Expedita rerum
            placeat quam minima exercitationem, asperiores officia distinctio
            ullam non aperiam consequatur facilis a, molestias neque possimus
            aliquam. Maxime dignissimos quod possimus minus voluptatibus modi
            quo numquam, id deleniti, harum veniam natus molestias voluptatem,
            maiores repudiandae eum fugit ab? Maiores, repellendus nulla. Sit
            corporis blanditiis totam ut necessitatibus enim repellendus qui
            ipsam error vitae eum, reiciendis, accusamus molestiae labore
            veniam.
          </p>
          <img className="w-[50%] h-[320px]" src={fileName[1]} alt="" />
        </div>
        {/* <br />
        <p className=" text-[16px] font-[400] leading-[24px]">
          {clubData.description}
        </p> */}
      </section>
    </section>
  );
};

export default Clubsingle;
