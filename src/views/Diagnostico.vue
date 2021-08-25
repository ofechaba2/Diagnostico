<template>
  <v-stepper v-model="e6" vertical>
    <h1 class="text-center" v-if="this.valor == 'Agropecuario'">
      DIAGNOSTICO EMPRESARIAL-SECTOR AGROPECUARIO
    </h1>
    <h1 class="text-center" v-if="this.valor == 'Comercio'">
      DIAGNOSTICO EMPRESARIAL-SECTOR COMERCIO
    </h1>
    <h1 class="text-center" v-if="this.valor == 'Industrial'">
      DIAGNOSTICO EMPRESARIAL-SECTOR INDUSTRIAL
    </h1>
    <h1 class="text-center" v-if="this.valor == 'Servicio'">
      DIAGNOSTICO EMPRESARIAL-SECTOR SERVICIO
    </h1>
    <v-stepper-step color="deep-purple accent-2" :complete="e6 > 1" step="1">
      <h2>Estrategia</h2>
    </v-stepper-step>

    <v-stepper-content  step="1">
      <v-card class="mb-12" height="540px">
        <div>
          <v-simple-table
            color="grey lighten-5"
            class="mb-1"
            height="550px"
            fixed-header
          >
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">SISTEMA</th>
                  <th></th>
                  <th class="text-center" colspan="150">EVALUACIÓN</th>
                  <th></th>
                  <th class="text-center">SELECCIONAR RESPUESTA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">1.1</td>
                  <td></td>
                  <td colspan="150">
                    ¿Cuenta con un analísis de contexto organizacional?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="estrategia.n1"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">1.2</td>
                  <td></td>
                  <td colspan="150">
                    ¿Tiene establecido y documentado los objetivos
                    organizacionales?
                  </td>
                  <td></td>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="estrategia.n2"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">1.3</td>
                  <td></td>
                  <td colspan="150">
                    ¿Tiene establecida una misión y la comunica periodicamente?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="estrategia.n3"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">1.4</td>
                  <td></td>
                  <td>
                    ¿Tiene establecida una visión y la recuerda periódicamente?
                  </td>
                  <th colspan="150"></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="estrategia.n4"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">1.5</td>
                  <td></td>
                  <td colspan="150">¿Cuenta con una estrategia de negocio?</td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="estrategia.n5"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">1.6</td>
                  <td></td>
                  <td colspan="150">
                    ¿Sabe que hace mejor que la competencia?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="estrategia.n6"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">1.7</td>
                  <td></td>
                  <td colspan="150">
                    ¿Sabe que caracteristica(s) diferenciadora(s) tiene(n) su(s)
                    producto(s)?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="estrategia.n7"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr></tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </v-card>

      <div style="text-align: right">
        <v-btn color="deep-purple accent-2" @click="e6 = 2"> Continuar </v-btn>
        <v-btn text col-3> Atras </v-btn>
      </div>
    </v-stepper-content>

    <v-stepper-step color="deep-purple accent-2" :complete="e6 > 2" step="2">
      <h2>Capital Humano</h2>
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-card color="grey lighten-5" class="mb-12" height="470px">
        <div>
          <v-simple-table
            color="grey lighten-5"
            class="mb-1"
            height="550px"
            fixed-header
          >
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">SISTEMA</th>
                  <th></th>
                  <th class="text-center" colspan="150">EVALUACIÓN</th>
                  <th></th>
                  <th class="text-center">SELECCIONAR RESPUESTA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">2.1</td>
                  <td></td>
                  <td colspan="150">
                    ¿Planea la capacidad del recurso humano para la producción?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="capitalHumano.n1"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">2.2</td>
                  <td></td>
                  <td colspan="150">
                    ¿Realiza actividades de formación y educación o patrocina a
                    sus empleados para realizarlas?
                  </td>
                  <td></td>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="capitalHumano.n2"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">2.3</td>
                  <td></td>
                  <td colspan="150">
                    ¿Los empleados tienen asignadas sus funciones y tareas de
                    forma documentada?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="capitalHumano.n3"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">2.4</td>
                  <td></td>
                  <td>
                    ¿Motiva sus empleados a través de incentivos o
                    reconocimientos?
                  </td>
                  <th colspan="150"></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="capitalHumano.n4"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">2.5</td>
                  <td></td>
                  <td colspan="150">¿Evalua el desempeño del personal?</td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="capitalHumano.n5"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">2.6</td>
                  <td></td>
                  <td colspan="150">
                    ¿Asegura los casos de éxito o los conocimientos de sus
                    empleados?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="capitalHumano.n6"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr></tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </v-card>
      <div style="text-align: right">
        <v-btn color="deep-purple accent-2" @click="e6 = 3"> Continuar </v-btn>
        <v-btn @click="e6 = 1"> Atras </v-btn>
      </div>
    </v-stepper-content>

    <v-stepper-step color="deep-purple accent-2" :complete="e6 > 3" step="3">
      <h2>Mercadotecnia</h2>
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="grey lighten-5" class="mb-12" height="670px">
        <div>
          <v-simple-table
            color="grey lighten-5"
            class="mb-1"
            height="750px"
            fixed-header
          >
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">SISTEMA</th>
                  <th></th>
                  <th class="text-center" colspan="150">EVALUACIÓN</th>
                  <th></th>
                  <th class="text-center">SELECCIONAR RESPUESTA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">3.1</td>
                  <td></td>
                  <td colspan="150">
                    ¿Tiene segmentado o clasificado a sus clientes?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="mercadotecnia.n1"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">3.2</td>
                  <td></td>
                  <td colspan="150">
                    ¿Tiene identificada las caracteristicas de los clientes que
                    le dejan la mayor parte de sus ingresos?
                  </td>
                  <td></td>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="mercadotecnia.n2"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">3.3</td>
                  <td></td>
                  <td colspan="150">
                    ¿Reconoce las principales necesidades de sus clientes?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="mercadotecnia.n3"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">3.4</td>
                  <td></td>
                  <td>¿Conoce a sus competidores directos e indirectos?</td>
                  <th colspan="150"></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="mercadotecnia.n4"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">3.5</td>
                  <td></td>
                  <td colspan="150">
                    ¿Evalua a la competencia para tomar decisiones en cuanto a
                    su servicio o producto?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="mercadotecnia.n5"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">3.6</td>
                  <td></td>
                  <td colspan="150">
                    ¿Cuenta con estrategias o programas de promoción?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="mercadotecnia.n6"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">3.7</td>
                  <td></td>
                  <td colspan="150">
                    ¿Se mide el impacto o se analiza el costo-beneficio cuando
                    se hace un descuento o promoción?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="mercadotecnia.n7"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">3.8</td>
                  <td></td>
                  <td colspan="150">¿Evalua la satisfacción del cliente?</td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="mercadotecnia.n8"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">3.9</td>
                  <td></td>
                  <td colspan="150">¿Cuenta con un servicio post-venta?</td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="mercadotecnia.n9"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr></tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </v-card>
      <div style="text-align: right">
        <v-btn color="deep-purple accent-2" @click="e6 = 4"> Continuar </v-btn>
        <v-btn @click="e6 = 2"> Atras </v-btn>
      </div>
    </v-stepper-content>
    <v-stepper-step color="deep-purple accent-2" :complete="e6 > 4" step="4">
      <h2>Ventas</h2>
    </v-stepper-step>

    <v-stepper-content step="4">
      <v-card color="grey lighten-5" class="mb-12" height="460px">
        <div>
          <v-simple-table
            color="grey lighten-5"
            class="mb-1"
            height="550px"
            fixed-header
          >
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">SISTEMA</th>
                  <th></th>
                  <th class="text-center" colspan="150">EVALUACIÓN</th>
                  <th></th>
                  <th class="text-center">SELECCIONAR RESPUESTA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">4.1</td>
                  <td></td>
                  <td colspan="150">¿Cuenta con una política de ventas?</td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="ventas.n1"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">4.2</td>
                  <td></td>
                  <td colspan="150">¿Tiene un objetivo de ventas?</td>
                  <td></td>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="ventas.n2"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">4.3</td>
                  <td></td>
                  <td colspan="150">¿Hace una planificación de las ventas?</td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="ventas.n3"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">4.4</td>
                  <td></td>
                  <td>¿Evalua el nivel de sus ventas periodicamente?</td>
                  <th colspan="150"></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="ventas.n4"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">4.5</td>
                  <td></td>
                  <td colspan="150">¿Cuenta con una estrategia de negocio?</td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="ventas.n5"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">4.6</td>
                  <td></td>
                  <td colspan="150">¿Conoce el costo de vender un producto?</td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="ventas.n6"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr></tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </v-card>
      <div style="text-align: right">
        <v-btn color="deep-purple accent-2" @click="e6 = 5"> Continuar </v-btn>
        <v-btn @click="e6 = 3"> Atras </v-btn>
      </div>
    </v-stepper-content>
    <v-stepper-step color="deep-purple accent-2" :complete="e6 > 5" step="5">
      <h2>Compras</h2>
    </v-stepper-step>

    <v-stepper-content step="5">
      <v-card color="grey lighten-5" class="mb-12" height="470px">
        <div>
          <v-simple-table
            color="grey lighten-5"
            class="mb-1"
            height="550px"
            fixed-header
          >
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">SISTEMA</th>
                  <th></th>
                  <th class="text-center" colspan="150">EVALUACIÓN</th>
                  <th></th>
                  <th class="text-center">SELECCIONAR RESPUESTA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">5.1</td>
                  <td></td>
                  <td colspan="150">¿Cuenta con una política de compras?</td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="compras.n1"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">5.2</td>
                  <td></td>
                  <td colspan="150">
                    ¿Compara y evalua a diferentes proveedores antes de hacer
                    sus compras?
                  </td>
                  <td></td>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="compras.n2"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">5.3</td>
                  <td></td>
                  <td colspan="150">
                    ¿Conoce o audita a su proveedor para conocer la calidad de
                    sus productos?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="compras.n3"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">5.4</td>
                  <td></td>
                  <td colspan="150">
                    ¿Registra sus insumos en un inventario cada vez que los
                    recibe?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="compras.n4"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>

                <tr>
                  <td class="text-center">5.5</td>
                  <td></td>
                  <td colspan="150">
                    ¿Tiene clasificado o categorizado sus insumos?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="compras.n5"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">5.6</td>
                  <td></td>
                  <td colspan="150">
                    ¿Conoce el volumen de compra adecuado para tener poco
                    inventario de materiales?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="compras.n6"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr></tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </v-card>
      <div style="text-align: right">
        <v-btn color="deep-purple accent-2" @click="e6 = 6"> Continuar </v-btn>
        <v-btn @click="e6 = 4"> Atras </v-btn>
      </div>
    </v-stepper-content>
    <v-stepper-step color="deep-purple accent-2" :complete="e6 > 6" step="6">
      <h2>Finanzas</h2>
    </v-stepper-step>

    <v-stepper-content step="6">
      <v-card color="grey lighten-5" class="mb-12" height="540px">
        <div>
          <v-simple-table
            color="grey lighten-5"
            class="mb-1"
            height="550px"
            fixed-header
          >
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">SISTEMA</th>
                  <th></th>
                  <th class="text-center" colspan="150">EVALUACIÓN</th>
                  <th></th>
                  <th class="text-center">SELECCIONAR RESPUESTA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">6.1</td>
                  <td></td>
                  <td colspan="150">
                    ¿Conoce el punto de equilibro financiero?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="finanzas.n1"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">6.2</td>
                  <td></td>
                  <td colspan="150">
                    ¿Cuenta con un presupuesto financiero (Flujo de fondos
                    proyectados)
                  </td>
                  <td></td>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="finanzas.n2"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">6.3</td>
                  <td></td>
                  <td colspan="150">
                    ¿Diseña estrategias o realiza acciones para la optimización
                    de recursos?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="finanzas.n3"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">6.4</td>
                  <td></td>
                  <td>¿Cuenta con estrategias de financiamiento?</td>
                  <th colspan="150"></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="finanzas.n4"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">6.5</td>
                  <td></td>
                  <td colspan="150">¿Cuenta con estrategias de inversión?</td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="finanzas.n5"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">6.6</td>
                  <td></td>
                  <td colspan="150">
                    ¿Conoce los costos directos de su(s) servicio(s)?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="finanzas.n6"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">6.7</td>
                  <td></td>
                  <td colspan="150">
                    ¿Conoce los costos indirectos de su(s) servicio(s)?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="finanzas.n7"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">6.8</td>
                  <td></td>
                  <td colspan="150">
                    ¿Conoce cual es su nivel de endeudamiento?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="finanzas.n8"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">6.9</td>
                  <td></td>
                  <td colspan="150">¿Conoce como esta su flujo de caja?</td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="finanzas.n9"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">6.10</td>
                  <td></td>
                  <td colspan="150">
                    ¿Conoce como esta su rotación de cartera?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="finanzas.n10"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr></tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </v-card>
      <div style="text-align: right">
        <v-btn color="deep-purple accent-2" @click="e6 = 7"> Continuar </v-btn>
        <v-btn @click="e6 = 5"> Atras </v-btn>
      </div>
    </v-stepper-content>
    <v-stepper-step color="deep-purple accent-2" :complete="e6 > 7" step="7">
      <h2>Produccion</h2>
    </v-stepper-step>

    <v-stepper-content step="7">
      <v-card color="grey lighten-5" class="mb-12" height="540px">
        <div>
          <v-simple-table
            color="grey lighten-5"
            class="mb-1"
            height="550px"
            fixed-header
          >
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">SISTEMA</th>
                  <th></th>
                  <th class="text-center" colspan="150">EVALUACIÓN</th>
                  <th></th>
                  <th class="text-center">SELECCIONAR RESPUESTA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">7.1</td>
                  <td></td>
                  <td colspan="150">
                    ¿Calcula cual es su capacidad de producción periodicamente?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="produccion.n1"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">7.2</td>
                  <td></td>
                  <td colspan="150">
                    ¿Calcula los tiempo que le lleva producir un producto?
                  </td>
                  <td></td>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="produccion.n2"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">7.3</td>
                  <td></td>
                  <td colspan="150">
                    ¿Tiene identificado que proceso o actividad es el cuello de
                    botella en la producción?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="produccion.n3"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">7.4</td>
                  <td></td>
                  <td>¿Calcula el tiempo de hora-hombre en la producción?</td>
                  <th colspan="150"></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="produccion.n4"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">7.5</td>
                  <td></td>
                  <td colspan="150">
                    ¿Calcula el tiempo de hora-maquina en la producción?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="produccion.n5"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">7.6</td>
                  <td></td>
                  <td colspan="150">
                    ¿Conoce la cantidad máxima de bienes o servicios que puede
                    producir?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="produccion.n6"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">7.7</td>
                  <td></td>
                  <td colspan="150">
                    ¿Conoce el costo que le lleva fabricar un producto?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="produccion.n7"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr></tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </v-card>
      <div style="text-align: right">
        <v-btn color="deep-purple accent-2" @click="e6 = 8"> Continuar </v-btn>
        <v-btn @click="e6 = 6"> Atras </v-btn>
      </div>
    </v-stepper-content>
    <v-stepper-step color="deep-purple accent-2" :complete="e6 > 8" step="8">
      <h2>Logística</h2>
    </v-stepper-step>

    <v-stepper-content step="8">
      <v-card color="grey lighten-5" class="mb-12" height="400px">
        <div>
          <v-simple-table
            color="grey lighten-5"
            class="mb-1"
            height="550px"
            fixed-header
          >
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">SISTEMA</th>
                  <th></th>
                  <th class="text-center" colspan="150">EVALUACIÓN</th>
                  <th></th>
                  <th class="text-center">SELECCIONAR RESPUESTA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">8.1</td>
                  <td></td>
                  <td colspan="150">
                    ¿Conoce los productos, materiales o materias primas
                    recibidas de forma puntual por parte de los proveedores al
                    igual que la calidad de lo recibido?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="logistica.n1"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">8.2</td>
                  <td></td>
                  <td colspan="150">
                    ¿Calcula periodicamente o en tiempo real el valor economico
                    del inventario?
                  </td>
                  <td></td>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="logistica.n2"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">8.3</td>
                  <td></td>
                  <td colspan="150">
                    ¿Considera que cuenta con una adecuada distribución en
                    planta?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="logistica.n3"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">8.4</td>
                  <td></td>
                  <td colspan="150">
                    ¿Calcula el costo de almacenamiento del producto terminado?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="logistica.n4"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>

                <tr>
                  <td class="text-center">8.5</td>
                  <td></td>
                  <td colspan="150">
                    ¿Calcula el costo de distribución o entrega de productos?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="logistica.n5"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr></tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </v-card>
      <div style="text-align: right">
        <v-btn color="deep-purple accent-2" @click="e6 = 9"> Continuar </v-btn>
        <v-btn @click="e6 = 7"> Atras </v-btn>
      </div>
    </v-stepper-content>
    <v-stepper-step color="deep-purple accent-2" :complete="e6 > 9" step="9">
      <h2>Tecnología</h2>
    </v-stepper-step>

    <v-stepper-content step="9">
      <v-card color="grey lighten-5" class="mb-12" height="340px">
        <div>
          <v-simple-table
            color="grey lighten-5"
            class="mb-1"
            height="550px"
            fixed-header
          >
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">SISTEMA</th>
                  <th></th>
                  <th class="text-center" colspan="150">EVALUACIÓN</th>
                  <th></th>
                  <th class="text-center">SELECCIONAR RESPUESTA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">9.1</td>
                  <td></td>
                  <td colspan="150">
                    ¿Considera que cuenta con equipos y maquinas necesarias para
                    la generación de valor a los clientes?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="tecnologia.n1"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">9.2</td>
                  <td></td>
                  <td colspan="150">
                    ¿Tiene una base de datos con la información de las partes
                    interesadas o la crea en el desarrollo de la actividad
                    economica?
                  </td>
                  <td></td>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="tecnologia.n2"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">9.3</td>
                  <td></td>
                  <td colspan="150">
                    ¿Cuenta con un Sistema de Información gerencial "ERP"?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="tecnologia.n3"
                      label="Sector de la Economía"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">9.4</td>
                  <td></td>
                  <td colspan="150">
                    ¿Cuenta con tecnología Cloud Computing para almacenar o
                    gestionar información en la nube?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="tecnologia.n4"
                      label="Sector de la Economía"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr></tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </v-card>
      <div style="text-align: right">
        <v-btn color="deep-purple accent-2" @click="e6 = 10"> Continuar </v-btn>
        <v-btn @click="e6 = 8"> Atras </v-btn>
      </div>
    </v-stepper-content>
    <v-stepper-step color="deep-purple accent-2" :complete="e6 > 10" step="10">
      <h2>Control y medición</h2>
    </v-stepper-step>

    <v-stepper-content step="10">
      <v-card color="grey lighten-5" class="mb-12" height="470px">
        <div>
          <v-simple-table
            color="grey lighten-5"
            class="mb-1"
            height="550px"
            fixed-header
          >
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">SISTEMA</th>
                  <th></th>
                  <th class="text-center" colspan="150">EVALUACIÓN</th>
                  <th></th>
                  <th class="text-center">SELECCIONAR RESPUESTA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">10.1</td>
                  <td></td>
                  <td colspan="150">
                    ¿Cuenta con Indicadores clave de desempeño?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="controlymedicion.n1"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">10.2</td>
                  <td></td>
                  <td colspan="150">
                    ¿Mide la productividad de su organización?
                  </td>
                  <td></td>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="controlymedicion.n2"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">10.3</td>
                  <td></td>
                  <td colspan="150">
                    ¿Cuenta con procesos de inpección y control de calidad?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="controlymedicion.n3"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">10.4</td>
                  <td></td>
                  <td colspan="150">
                    ¿Mide la rentabilidad de la organización?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="controlymedicion.n4"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">10.5</td>
                  <td></td>
                  <td colspan="150">
                    ¿Mide la productividad del Capital de Trabajo Neto?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="controlymedicion.n5"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">10.6</td>
                  <td></td>
                  <td colspan="150">
                    ¿En caso de tener un prestamo, mide el impacto de la carga
                    financiera?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="controlymedicion.n6"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr></tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </v-card>
      <div style="text-align: right">
        <v-btn color="deep-purple accent-2" @click="e6 = 11"> Continuar </v-btn>
        <v-btn @click="e6 = 9"> Atras </v-btn>
      </div>
    </v-stepper-content>
    <v-stepper-step color="deep-purple accent-2" :complete="e6 > 11" step="11">
      <h2>Comunicación</h2>
    </v-stepper-step>

    <v-stepper-content step="11">
      <v-card color="grey lighten-5" class="mb-12" height="540px">
        <div>
          <v-simple-table
            color="grey lighten-5"
            class="mb-1"
            height="550px"
            fixed-header
          >
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">SISTEMA</th>
                  <th></th>
                  <th class="text-center" colspan="150">EVALUACIÓN</th>
                  <th></th>
                  <th class="text-center">SELECCIONAR RESPUESTA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center">11.1</td>
                  <td></td>
                  <td colspan="150">
                    ¿Cuenta con canales de comunicación establecidos y
                    organizados?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="comunicacion.n1"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">11.2</td>
                  <td></td>
                  <td colspan="150">
                    ¿Cuenta con los suficientes medios y canales de información
                    para estar enterado de lo que sucede en el contexto interno
                    de la organización?
                  </td>
                  <td></td>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="comunicacion.n2"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">11.3</td>
                  <td></td>
                  <td colspan="150">
                    ¿Cuenta con los suficientes medios y canales de información
                    para estar enterado de lo que sucede en el contexto externo
                    de la organización?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="comunicacion.n3"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">11.4</td>
                  <td></td>
                  <td colspan="150">
                    ¿Considera que se canaliza la información que la
                    organización requiere?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="comunicacion.n4"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">11.5</td>
                  <td></td>
                  <td colspan="150">
                    ¿Se considera pertinente y oportuna la entrega de
                    información a las partes interesadas?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="comunicacion.n5"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">11.6</td>
                  <td></td>
                  <td colspan="150">
                    ¿Pertenece a algun grupo empresarial o Holding?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="comunicacion.n6"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">11.7</td>
                  <td></td>
                  <td colspan="150">
                    ¿Forma parte de alguna Cámara de Comercio?
                  </td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="comunicacion.n7"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr>
                  <td class="text-center">11.8</td>
                  <td></td>
                  <td colspan="150">¿Pertenece a algun Clúster?</td>
                  <th></th>
                  <td>
                    <v-select
                      :items="seleccion"
                      v-model="comunicacion.n8"
                      label="Seleccione una opcion"
                      required
                    ></v-select>
                  </td>
                </tr>
                <tr></tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </v-card>
      <div style="text-align: right">
        <v-btn color="deep-purple accent-2" @click="guardar"> Ver Resultados </v-btn>
        <v-btn @click="e6 = 10"> Atras </v-btn>
      </div>
    </v-stepper-content>
  </v-stepper>
</template>



<script>
export default {
  data: () => ({
    valor: global.GsectorEconomia,

    e6: 1,
    valid: false,
    seleccion: ["Si", "No", "No Aplica"],
    estrategia: [
      'n1: ""',
      'n2: ""',
      'n3: ""',
      'n4: ""',
      'n5: ""',
      'n6: ""',
      'n7: ""',
    ],

    capitalHumano: ['n1: ""', 'n2: ""', 'n3: ""', 'n4: ""', 'n5: ""', 'n6: ""'],
    mercadotecnia: [
      'n1: ""',
      'n2: ""',
      'n3: ""',
      'n4: ""',
      'n5: ""',
      'n6: ""',
      'n7: ""',
      'n8: ""',
      'n9: ""',
    ],
    ventas: ['n1: ""', 'n2: ""', 'n3: ""', 'n4: ""', 'n5: ""', 'n6: ""'],
    compras: ['n1: ""', 'n2: ""', 'n3: ""', 'n4: ""', 'n5: ""', 'n6: ""'],
    finanzas: [
      'n1: ""',
      'n2: ""',
      'n3: ""',
      'n4: ""',
      'n5: ""',
      'n6: ""',
      'n7: ""',
      'n8: ""',
      'n9: ""',
      'n10: ""',
    ],
    produccion: [
      'n1: ""',
      'n2: ""',
      'n3: ""',
      'n4: ""',
      'n5: ""',
      'n6: ""',
      'n7: ""',
    ],
    logistica: ['n1: ""', 'n2: ""', 'n3: ""', 'n4: ""', 'n5: ""'],
    tecnologia: ['n1: ""', 'n2: ""', 'n3: ""', 'n4: ""'],
    controlymedicion: [
      'n1: ""',
      'n2: ""',
      'n3: ""',
      'n4: ""',
      'n5: ""',
      'n6: ""',
    ],
    comunicacion: [
      'n1: ""',
      'n2: ""',
      'n3: ""',
      'n4: ""',
      'n5: ""',
      'n6: ""',
      'n7: ""',
      'n8: ""',
      
    ],
    // if (estrategia=) {
      
    // }
  }),
  // computed:{
  //   if(seleccion = si) 
  // },

  methods: {
    guardar() {
      if (
        this.estrategia != "" &&
        this.capitalHumano != "" &&
        this.mercadotecnia != "" &&
        this.ventas != "" &&
        this.compras != "" &&
        this.finanzas != "" &&
        this.produccion != "" &&
        this.logistica != "" &&
        this.tecnologia != "" &&
        this.controlymedicion != "" &&
        this.comunicacion != ""
      ) {
        const formulario = {
          estrategia: [
            this.estrategia.n1,
            this.estrategia.n2,
            this.estrategia.n3,
            this.estrategia.n4,
            this.estrategia.n5,
            this.estrategia.n6,
            this.estrategia.n7,
          ],
          capitalHumano: [
            this.capitalHumano.n1,
            this.capitalHumano.n2,
            this.capitalHumano.n3,
            this.capitalHumano.n4,
            this.capitalHumano.n5,
            this.capitalHumano.n6,
          ],
          mercadotecnia: [
            this.mercadotecnia.n1,
            this.mercadotecnia.n2,
            this.mercadotecnia.n3,
            this.mercadotecnia.n4,
            this.mercadotecnia.n5,
            this.mercadotecnia.n6,
            this.mercadotecnia.n7,
            this.mercadotecnia.n8,
            this.mercadotecnia.n9,
          ],
          ventas: [
            this.ventas.n1,
            this.ventas.n2,
            this.ventas.n3,
            this.ventas.n4,
            this.ventas.n5,
            this.ventas.n6,
          ],
          compras: [
            this.compras.n1,
            this.compras.n2,
            this.compras.n3,
            this.compras.n4,
            this.compras.n5,
            this.compras.n6,
          ],
          finanzas: [
            this.finanzas.n1,
            this.finanzas.n2,
            this.finanzas.n3,
            this.finanzas.n4,
            this.finanzas.n5,
            this.finanzas.n6,
            this.finanzas.n7,
            this.finanzas.n8,
            this.finanzas.n9,
            this.finanzas.n10,
          ],
          produccion: [
            this.produccion.n1,
            this.produccion.n2,
            this.produccion.n3,
            this.produccion.n4,
            this.produccion.n5,
            this.produccion.n6,
            this.produccion.n7,
          ],
          logistica: [
            this.logistica.n1,
            this.logistica.n2,
            this.logistica.n3,
            this.logistica.n4,
            this.logistica.n5,
          ],
          tecnologia: [
            this.tecnologia.n1,
            this.tecnologia.n2,
            this.tecnologia.n3,
            this.tecnologia.n4,
          ],
          controlymedicion: [
            this.controlymedicion.n1,
            this.controlymedicion.n2,
            this.controlymedicion.n3,
            this.controlymedicion.n4,
            this.controlymedicion.n5,
            this.controlymedicion.n6,
          ],
          comunicacion: [
            this.comunicacion.n1,
            this.comunicacion.n2,
            this.comunicacion.n3,
            this.comunicacion.n4,
            this.comunicacion.n5,
            this.comunicacion.n6,
            this.comunicacion.n7,
            this.comunicacion.n8,
          ],
        };    
        
        this.$store.dispatch("addDiagnostico", formulario);
        this.$router.push("./grafico");
      } else {
        alert("Todos los campos son requeridos");
        // (
        // <v-alert border="left" color="red" type="error">
        //   Todos los campos son requeridos
        // </v-alert>;
        // );
      }
    },
  },
};
</script>