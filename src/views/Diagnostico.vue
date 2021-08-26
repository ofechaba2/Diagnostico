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
    <v-stepper-content step="1">
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
                      v-model="estrategia1"
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
                      v-model="estrategia2"
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
                      v-model="estrategia3"
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
                      v-model="estrategia4"
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
                      v-model="estrategia5"
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
                      v-model="estrategia6"
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
                      v-model="estrategia7"
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
        <v-btn color="deep-purple accent-2" @click="guardarestrategia()">
          Continuar
        </v-btn>
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
                      v-model="capitalHumano1"
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
                      v-model="capitalHumano2"
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
                      v-model="capitalHumano3"
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
                      v-model="capitalHumano4"
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
                      v-model="capitalHumano5"
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
                      v-model="capitalHumano6"
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
        <v-btn color="deep-purple accent-2" @click="guardarcapitalhumano()">
          Continuar
        </v-btn>
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
                      v-model="mercadotecnia1"
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
                      v-model="mercadotecnia2"
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
                      v-model="mercadotecnia3"
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
                      v-model="mercadotecnia4"
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
                      v-model="mercadotecnia5"
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
                      v-model="mercadotecnia6"
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
                      v-model="mercadotecnia7"
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
                      v-model="mercadotecnia8"
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
                      v-model="mercadotecnia9"
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
        <v-btn color="deep-purple accent-2" @click="guardarmercadotecnia()">
          Continuar
        </v-btn>
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
                      v-model="ventas1"
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
                      v-model="ventas2"
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
                      v-model="ventas3"
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
                      v-model="ventas4"
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
                      v-model="ventas5"
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
                      v-model="ventas6"
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
        <v-btn color="deep-purple accent-2" @click="guardarVentas()">
          Continuar
        </v-btn>
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
                      v-model="compras1"
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
                      v-model="compras2"
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
                      v-model="compras3"
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
                      v-model="compras4"
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
                      v-model="compras5"
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
                      v-model="compras6"
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
        <v-btn color="deep-purple accent-2" @click="guardarCompras()">
          Continuar
        </v-btn>
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
                      v-model="finanzas1"
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
                      v-model="finanzas2"
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
                      v-model="finanzas3"
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
                      v-model="finanzas4"
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
                      v-model="finanzas5"
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
                      v-model="finanzas6"
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
                      v-model="finanzas7"
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
                      v-model="finanzas8"
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
                      v-model="finanzas9"
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
                      v-model="finanzas10"
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
        <v-btn color="deep-purple accent-2" @click="guardarFinanzas()">
          Continuar
        </v-btn>
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
                      v-model="produccion1"
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
                      v-model="produccion2"
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
                      v-model="produccion3"
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
                      v-model="produccion4"
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
                      v-model="produccion5"
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
                      v-model="produccion6"
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
                      v-model="produccion7"
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
        <v-btn color="deep-purple accent-2" @click="guardarProduccion()">
          Continuar
        </v-btn>
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
                      v-model="logistica1"
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
                      v-model="logistica2"
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
                      v-model="logistica3"
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
                      v-model="logistica4"
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
                      v-model="logistica5"
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
        <v-btn color="deep-purple accent-2" @click="guardarLogistica()">
          Continuar
        </v-btn>
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
                      v-model="tecnologia1"
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
                      v-model="tecnologia2"
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
                      v-model="tecnologia3"
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
                      v-model="tecnologia4"
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
        <v-btn color="deep-purple accent-2" @click="guardarTecnologia()">
          Continuar
        </v-btn>
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
                      v-model="controlymedicion1"
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
                      v-model="controlymedicion2"
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
                      v-model="controlymedicion3"
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
                      v-model="controlymedicion4"
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
                      v-model="controlymedicion5"
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
                      v-model="controlymedicion6"
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
        <v-btn color="deep-purple accent-2" @click="guardarControlymedicion()">
          Continuar
        </v-btn>
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
                      v-model="comunicacion1"
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
                      v-model="comunicacion2"
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
                      v-model="comunicacion3"
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
                      v-model="comunicacion4"
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
                      v-model="comunicacion5"
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
                      v-model="comunicacion6"
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
                      v-model="comunicacion7"
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
                      v-model="comunicacion8"
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
        <v-btn color="deep-purple accent-2" @click="guardarComunicacion()">
          Ver Resultados
        </v-btn>
        <v-btn @click="e6 = 10"> Atras </v-btn>
      </div>
    </v-stepper-content>
  </v-stepper>
</template>
<script>
import Swal from "sweetalert2";
export default {
  data: () => ({
    valor: global.GsectorEconomia,
    nombre: "",
    datos: "",
    e6: 1,
    valid: false,
    seleccion: ["Si", "No", "No Aplica"],

    // estrategia:
    estrategia1: "",
    estrategia2: "",
    estrategia3: "",
    estrategia4: "",
    estrategia5: "",
    estrategia6: "",
    estrategia7: "",

    // capitalHumano:
    capitalHumano1: "",
    capitalHumano2: "",
    capitalHumano3: "",
    capitalHumano4: "",
    capitalHumano5: "",
    capitalHumano6: "",

    // mercadotecnia:
    mercadotecnia1: "",
    mercadotecnia2: "",
    mercadotecnia3: "",
    mercadotecnia4: "",
    mercadotecnia5: "",
    mercadotecnia6: "",
    mercadotecnia7: "",
    mercadotecnia8: "",
    mercadotecnia9: "",

    // ventas:
    ventas1: "",
    ventas2: "",
    ventas3: "",
    ventas4: "",
    ventas5: "",
    ventas6: "",

    // compras:
    compras1: "",
    compras2: "",
    compras3: "",
    compras4: "",
    compras5: "",
    compras6: "",

    // finanzas:
    finanzas1: "",
    finanzas2: "",
    finanzas3: "",
    finanzas4: "",
    finanzas5: "",
    finanzas6: "",
    finanzas7: "",
    finanzas8: "",
    finanzas9: "",
    finanzas10: "",

    // produccion:
    produccion1: "",
    produccion2: "",
    produccion3: "",
    produccion4: "",
    produccion5: "",
    produccion6: "",
    produccion7: "",

    // logistica:
    logistica1: "",
    logistica2: "",
    logistica3: "",
    logistica4: "",
    logistica5: "",

    // tecnologia:
    tecnologia1: "",
    tecnologia2: "",
    tecnologia3: "",
    tecnologia4: "",

    // controlymedicion:
    controlymedicion1: "",
    controlymedicion2: "",
    controlymedicion3: "",
    controlymedicion4: "",
    controlymedicion5: "",
    controlymedicion6: "",

    // comunicacion:
    comunicacion1: "",
    comunicacion2: "",
    comunicacion3: "",
    comunicacion4: "",
    comunicacion5: "",
    comunicacion6: "",
    comunicacion7: "",
    comunicacion8: "",
  }),
  methods: {
    guardarestrategia() {
      if (
        (this.estrategia1 != "",
        this.estrategia2 != "",
        this.estrategia3 != "",
        this.estrategia4 != "",
        this.estrategia5 != "",
        this.estrategia6 != "",
        this.estrategia7 != "")
      ) {
        if (this.estrategia1 == "Si") {
          this.estrategia1 = 10;
        } else {
          this.estrategia1 = 0;
        }
        if (this.estrategia2 == "Si") {
          this.estrategia2 = 10;
        } else {
          this.estrategia2 = 0;
        }
        if (this.estrategia3 == "Si") {
          this.estrategia3 = 10;
        } else {
          this.estrategia3 = 0;
        }
        if (this.estrategia4 == "Si") {
          this.estrategia4 = 10;
        } else {
          this.estrategia4 = 0;
        }
        if (this.estrategia5 == "Si") {
          this.estrategia5 = 10;
        } else {
          this.estrategia5 = 0;
        }
        if (this.estrategia6 == "Si") {
          this.estrategia6 = 10;
        } else {
          this.estrategia6 = 0;
        }
        if (this.estrategia7 == "Si") {
          this.estrategia7 = 10;
        } else {
          this.estrategia7 = 0;
        }
        var sumaEstrategia =
          this.estrategia1 +
          this.estrategia2 +
          this.estrategia3 +
          this.estrategia4 +
          this.estrategia5 +
          this.estrategia6 +
          this.estrategia7;
        console.log(this.sumaEstrategia);
        const formularioEstrategia = {
          nombre: "Estrategia",
          datos: sumaEstrategia,
        };
        (this.e6 = 2),
          this.$store.dispatch("addDiagnostico", formularioEstrategia);
      } else {
        Swal.fire(
          "¡Informacion!",
          "Todos los campos son requeridos, por favor verifique e intente nuevamente.",
          "info"
        );
      }
    },
    guardarcapitalhumano() {
      if (
        (this.capitalHumano1 != "",
        this.capitalHumano2 != "",
        this.capitalHumano3 != "",
        this.capitalHumano4 != "",
        this.capitalHumano5 != "",
        this.capitalHumano6 != "")
      ) {
        if (this.capitalHumano1 == "Si") {
          this.capitalHumano1 = 10;
        } else {
          this.capitalHumano1 = 0;
        }
        if (this.capitalHumano2 == "Si") {
          this.capitalHumano2 = 10;
        } else {
          this.capitalHumano2 = 0;
        }
        if (this.capitalHumano3 == "Si") {
          this.capitalHumano3 = 10;
        } else {
          this.capitalHumano3 = 0;
        }
        if (this.capitalHumano4 == "Si") {
          this.capitalHumano4 = 10;
        } else {
          this.capitalHumano4 = 0;
        }
        if (this.capitalHumano5 == "Si") {
          this.capitalHumano5 = 10;
        } else {
          this.capitalHumano5 = 0;
        }
        if (this.capitalHumano6 == "Si") {
          this.capitalHumano6 = 10;
        } else {
          this.capitalHumano6 = 0;
        }
        var sumarCapitalhumano =
          this.capitalHumano1 +
          this.capitalHumano2 +
          this.capitalHumano3 +
          this.capitalHumano4 +
          this.capitalHumano5 +
          this.capitalHumano6;
        const formularioCapitalhumano = {
          nombre: "Capital Humano",
          datos: sumarCapitalhumano,
        };
        (this.e6 = 3),
          this.$store.dispatch("addDiagnostico", formularioCapitalhumano);
      } else {
        Swal.fire(
          "¡Informacion!",
          "Todos los campos son requeridos, por favor verifique e intente nuevamente.",
          "info"
        );
      }
    },
    guardarmercadotecnia() {
      if (
        (this.mercadotecnia1 != "",
        this.mercadotecnia2 != "",
        this.mercadotecnia3 != "",
        this.mercadotecnia4 != "",
        this.mercadotecnia5 != "",
        this.mercadotecnia6 != "",
        this.mercadotecnia7 != "",
        this.mercadotecnia8 != "",
        this.mercadotecnia9 != "")
      ) {
        if (this.mercadotecnia1 == "Si") {
          this.mercadotecnia1 = 10;
        } else {
          this.mercadotecnia1 = 0;
        }
        if (this.mercadotecnia2 == "Si") {
          this.mercadotecnia2 = 10;
        } else {
          this.mercadotecnia2 = 0;
        }
        if (this.mercadotecnia3 == "Si") {
          this.mercadotecnia3 = 10;
        } else {
          this.mercadotecnia3 = 0;
        }
        if (this.mercadotecnia4 == "Si") {
          this.mercadotecnia4 = 10;
        } else {
          this.mercadotecnia4 = 0;
        }
        if (this.mercadotecnia5 == "Si") {
          this.mercadotecnia5 = 10;
        } else {
          this.mercadotecnia5 = 0;
        }
        if (this.mercadotecnia6 == "Si") {
          this.mercadotecnia6 = 10;
        } else {
          this.mercadotecnia6 = 0;
        }
        if (this.mercadotecnia7 == "Si") {
          this.mercadotecnia7 = 10;
        } else {
          this.mercadotecnia7 = 0;
        }
        if (this.mercadotecnia8 == "Si") {
          this.mercadotecnia8 = 10;
        } else {
          this.mercadotecnia8 = 0;
        }
        if (this.mercadotecnia9 == "Si") {
          this.mercadotecnia9 = 10;
        } else {
          this.mercadotecnia9 = 0;
        }
        var sumarMercadotecnia =
          this.mercadotecnia1 +
          this.mercadotecnia2 +
          this.mercadotecnia3 +
          this.mercadotecnia4 +
          this.mercadotecnia5 +
          this.mercadotecnia6 +
          this.mercadotecnia7 +
          this.mercadotecnia8 +
          this.mercadotecnia9;
        const formularioMercadotecnia = {
          nombre: "Mercadotecnia",
          datos: sumarMercadotecnia,
        };
        this.e6 = 4;
        this.$store.dispatch("addDiagnostico", formularioMercadotecnia);
      } else {
        Swal.fire(
          "¡Informacion!",
          "Todos los campos son requeridos, por favor verifique e intente nuevamente.",
          "info"
        );
      }
    },
    guardarVentas() {
      if (
        (this.ventas1 != "",
        this.ventas2 != "",
        this.ventas3 != "",
        this.ventas4 != "",
        this.ventas5 != "",
        this.ventas6 != "")
      ) {
        if (this.ventas1 == "Si") {
          this.ventas1 = 10;
        } else {
          this.ventas1 = 0;
        }
        if (this.ventas2 == "Si") {
          this.ventas2 = 10;
        } else {
          this.ventas2 = 0;
        }
        if (this.ventas3 == "Si") {
          this.ventas3 = 10;
        } else {
          this.ventas3 = 0;
        }
        if (this.ventas4 == "Si") {
          this.ventas4 = 10;
        } else {
          this.ventas4 = 0;
        }
        if (this.ventas5 == "Si") {
          this.ventas5 = 10;
        } else {
          this.ventas5 = 0;
        }
        if (this.ventas6 == "Si") {
          this.ventas6 = 10;
        } else {
          this.ventas6 = 0;
        }
        var sumarVentas =
          this.ventas1 +
          this.ventas2 +
          this.ventas3 +
          this.ventas4 +
          this.ventas5 +
          this.ventas6;
        const formularioVentas = {
          nombre: "Ventas",
          datos: sumarVentas,
        };
        this.e6 = 5;
        this.$store.dispatch("addDiagnostico", formularioVentas);
      } else {
        Swal.fire(
          "¡Informacion!",
          "Todos los campos son requeridos, por favor verifique e intente nuevamente.",
          "info"
        );
      }
    },
    guardarCompras() {
      if (
        (this.compras1 != "",
        this.compras2 != "",
        this.compras3 != "",
        this.compras4 != "",
        this.compras5 != "",
        this.compras6 != "")
      ) {
        if (this.compras1 == "Si") {
          this.compras1 = 10;
        } else {
          this.compras1 = 0;
        }
        if (this.compras2 == "Si") {
          this.compras2 = 10;
        } else {
          this.compras2 = 0;
        }
        if (this.compras3 == "Si") {
          this.compras3 = 10;
        } else {
          this.compras3 = 0;
        }
        if (this.compras4 == "Si") {
          this.compras4 = 10;
        } else {
          this.compras4 = 0;
        }
        if (this.compras5 == "Si") {
          this.compras5 = 10;
        } else {
          this.compras5 = 0;
        }
        if (this.compras6 == "Si") {
          this.compras6 = 10;
        } else {
          this.compras6 = 0;
        }
        var sumarCompras =
          this.compras1 +
          this.compras2 +
          this.compras3 +
          this.compras4 +
          this.compras5 +
          this.compras6;
        const formularioCompras = {
          nombre: "Compras",
          datos: sumarCompras,
        };
        this.e6 = 6;
        this.$store.dispatch("addDiagnostico", formularioCompras);
      } else {
        Swal.fire(
          "¡Informacion!",
          "Todos los campos son requeridos, por favor verifique e intente nuevamente.",
          "info"
        );
      }
    },
    guardarFinanzas() {
      if (
        (this.finanzas1 != "",
        this.finanzas2 != "",
        this.finanzas3 != "",
        this.finanzas4 != "",
        this.finanzas5 != "",
        this.finanzas6 != "",
        this.finanzas7 != "",
        this.finanzas8 != "",
        this.finanzas9 != "",
        this.finanzas10 != "")
      ) {
        if (this.finanzas1 == "Si") {
          this.finanzas1 = 10;
        } else {
          this.finanzas1 = 0;
        }
        if (this.finanzas2 == "Si") {
          this.finanzas2 = 10;
        } else {
          this.finanzas2 = 0;
        }
        if (this.finanzas3 == "Si") {
          this.finanzas3 = 10;
        } else {
          this.finanzas3 = 0;
        }
        if (this.finanzas4 == "Si") {
          this.finanzas4 = 10;
        } else {
          this.finanzas4 = 0;
        }
        if (this.finanzas5 == "Si") {
          this.finanzas5 = 10;
        } else {
          this.finanzas5 = 0;
        }
        if (this.finanzas6 == "Si") {
          this.finanzas6 = 10;
        } else {
          this.finanzas6 = 0;
        }
        if (this.finanzas7 == "Si") {
          this.finanzas7 = 10;
        } else {
          this.finanzas7 = 0;
        }
        if (this.finanzas8 == "Si") {
          this.finanzas8 = 10;
        } else {
          this.finanzas8 = 0;
        }
        if (this.finanzas9 == "Si") {
          this.finanzas9 = 10;
        } else {
          this.finanzas9 = 0;
        }
        if (this.finanzas10 == "Si") {
          this.finanzas10 = 10;
        } else {
          this.finanzas10 = 0;
        }
        var sumarFinanzas =
          this.finanzas1 +
          this.finanzas2 +
          this.finanzas3 +
          this.finanzas4 +
          this.finanzas5 +
          this.finanzas6 +
          this.finanzas7 +
          this.finanzas8 +
          this.finanzas9 +
          this.finanzas10;

        const formularioFinanzas = {
          nombre: "Finanzas",
          datos: sumarFinanzas,
        };
        this.e6 = 7;
        this.$store.dispatch("addDiagnostico", formularioFinanzas);
      } else {
        Swal.fire(
          "¡Informacion!",
          "Todos los campos son requeridos, por favor verifique e intente nuevamente.",
          "info"
        );
      }
    },
    guardarProduccion() {
      if (
        (this.produccion1 != "",
        this.produccion2 != "",
        this.produccion3 != "",
        this.produccion4 != "",
        this.produccion5 != "",
        this.produccion6 != "",
        this.produccion7 != "")
      ) {
        if (this.produccion1 == "Si") {
          this.produccion1 = 10;
        } else {
          this.produccion1 = 0;
        }
        if (this.produccion2 == "Si") {
          this.produccion2 = 10;
        } else {
          this.produccion2 = 0;
        }
        if (this.produccion3 == "Si") {
          this.produccion3 = 10;
        } else {
          this.produccion3 = 0;
        }
        if (this.produccion4 == "Si") {
          this.produccion4 = 10;
        } else {
          this.produccion4 = 0;
        }
        if (this.produccion5 == "Si") {
          this.produccion5 = 10;
        } else {
          this.produccion5 = 0;
        }
        if (this.produccion6 == "Si") {
          this.produccion6 = 10;
        } else {
          this.produccion6 = 0;
        }
        if (this.produccion7 == "Si") {
          this.produccion7 = 10;
        } else {
          this.produccion7 = 0;
        }
        var sumarProduccion =
          this.produccion1 +
          this.produccion2 +
          this.produccion3 +
          this.produccion4 +
          this.produccion5 +
          this.produccion6 +
          this.produccion7;
        const formularioProduccion = {
          nombre: "Produccion",
          datos: sumarProduccion,
        };
        (this.e6 = 8),
          this.$store.dispatch("addDiagnostico", formularioProduccion);
      } else {
        Swal.fire(
          "¡Informacion!",
          "Todos los campos son requeridos, por favor verifique e intente nuevamente.",
          "info"
        );
      }
    },
    guardarLogistica() {
      if (
        (this.logistica1 != "",
        this.logistica2 != "",
        this.logistica3 != "",
        this.logistica4 != "",
        this.logistica5 != "")
      ) {
        if (this.logistica1 == "Si") {
          this.logistica1 = 10;
        } else {
          this.logistica1 = 0;
        }
        if (this.logistica2 == "Si") {
          this.logistica2 = 10;
        } else {
          this.logistica2 = 0;
        }
        if (this.logistica3 == "Si") {
          this.logistica3 = 10;
        } else {
          this.logistica3 = 0;
        }
        if (this.logistica4 == "Si") {
          this.logistica4 = 10;
        } else {
          this.logistica4 = 0;
        }
        if (this.logistica5 == "Si") {
          this.logistica5 = 10;
        } else {
          this.logistica5 = 0;
        }
        var sumarLogistica =
          this.logistica1 +
          this.logistica2 +
          this.logistica3 +
          this.logistica4 +
          this.logistica5;
        const formularioLogistica = {
          nombre: "Logística",
          datos: sumarLogistica,
        };
        this.e6 = 9;
        this.$store.dispatch("addDiagnostico", formularioLogistica);
      } else {
        Swal.fire(
          "¡Informacion!",
          "Todos los campos son requeridos, por favor verifique e intente nuevamente.",
          "info"
        );
      }
    },
    guardarTecnologia() {
      if (
        (this.tecnologia1 != "",
        this.tecnologia2 != "",
        this.tecnologia3 != "",
        this.tecnologia4 != "")
      ) {
        if (this.tecnologia1 == "Si") {
          this.tecnologia1 = 10;
        } else {
          this.tecnologia1 = 0;
        }
        if (this.tecnologia2 == "Si") {
          this.tecnologia2 = 10;
        } else {
          this.tecnologia2 = 0;
        }
        if (this.tecnologia3 == "Si") {
          this.tecnologia3 = 10;
        } else {
          this.tecnologia3 = 0;
        }
        if (this.tecnologia4 == "Si") {
          this.tecnologia4 = 10;
        } else {
          this.tecnologia4 = 0;
        }
        var sumarTecnologia =
          this.tecnologia1 + this.tecnologia2 + this.tecnologia3 + this.tecnologia4;
        const formularioTecnologia = {
          nombre: "Tecnología",
          datos: sumarTecnologia,
        };
        this.e6 = 10;
        this.$store.dispatch("addDiagnostico", formularioTecnologia);
      } else {
        Swal.fire(
          "¡Informacion!",
          "Todos los campos son requeridos, por favor verifique e intente nuevamente.",
          "info"
        );
      }
    },
    guardarControlymedicion() {
      if (
        (this.controlymedicion1 != "",
        this.controlymedicion2 != "",
        this.controlymedicion3 != "",
        this.controlymedicion4 != "",
        this.controlymedicion5 != "",
        this.controlymedicion6 != "")
      ) {
        if (this.controlymedicion1 == "Si") {
          this.controlymedicion1 = 10;
        } else {
          this.controlymedicion1 = 0;
        }
        if (this.controlymedicion2 == "Si") {
          this.controlymedicion2 = 10;
        } else {
          this.controlymedicion2 = 0;
        }
        if (this.controlymedicion3 == "Si") {
          this.controlymedicion3 = 10;
        } else {
          this.controlymedicion3 = 0;
        }
        if (this.controlymedicion4 == "Si") {
          this.controlymedicion4 = 10;
        } else {
          this.controlymedicion4 = 0;
        }
        if (this.controlymedicion5 == "Si") {
          this.controlymedicion5 = 10;
        } else {
          this.controlymedicion5 = 0;
        }
        if (this.controlymedicion6 == "Si") {
          this.controlymedicion6 = 10;
        } else {
          this.controlymedicion6 = 0;
        }
        var sumarControlymedicion =
          this.controlymedicion1 +
          this.controlymedicion2 +
          this.controlymedicion3 +
          this.controlymedicion4 +
          this.controlymedicion5 +
          this.controlymedicion6;
        const formularioControlymedicion = {
          nombre: "Control y medición",
          datos: sumarControlymedicion,
        };
        (this.e6 = 11),
          this.$store.dispatch("addDiagnostico", formularioControlymedicion);
      } else {
        Swal.fire(
          "¡Informacion!",
          "Todos los campos son requeridos, por favor verifique e intente nuevamente.",
          "info"
        );
      }
    },
    guardarComunicacion() {
      if (
        (this.comunicacion1 != "",
        this.comunicacion2 != "",
        this.comunicacion3 != "",
        this.comunicacion4 != "",
        this.comunicacion5 != "",
        this.comunicacion6 != "",
        this.comunicacion7 != "",
        this.comunicacion8 != "")
      ) {
        if (this.comunicacion1 == "Si") {
          this.comunicacion1 = 10;
        } else {
          this.comunicacion1 = 0;
        }
        if (this.comunicacion2 == "Si") {
          this.comunicacion2 = 10;
        } else {
          this.comunicacion2 = 0;
        }
        if (this.comunicacion3 == "Si") {
          this.comunicacion3 = 10;
        } else {
          this.comunicacion3 = 0;
        }
        if (this.comunicacion4 == "Si") {
          this.comunicacion4 = 10;
        } else {
          this.comunicacion4 = 0;
        }
        if (this.comunicacion5 == "Si") {
          this.comunicacion5 = 10;
        } else {
          this.comunicacion5 = 0;
        }
        if (this.comunicacion6 == "Si") {
          this.comunicacion6 = 10;
        } else {
          this.comunicacion6 = 0;
        }
        if (this.comunicacion7 == "Si") {
          this.comunicacion7 = 10;
        } else {
          this.comunicacion7 = 0;
        }
        if (this.comunicacion8 == "Si") {
          this.comunicacion8 = 10;
        } else {
          this.comunicacion8 = 0;
        }
        var sumarComunicacion =
          this.comunicacion1 +
          this.comunicacion2 +
          this.comunicacion3 +
          this.comunicacion4 +
          this.comunicacion5 +
          this.comunicacion6 +
          this.comunicacion7 +
          this.comunicacion8;
        const formularioComunicacion = {
          nombre: "Comunicación",
          datos: sumarComunicacion,
        };
        this.$store.dispatch("addDiagnostico", formularioComunicacion);
        this.$router.push("./grafico");
      } else {
        Swal.fire(
          "¡Informacion!",
          "Todos los campos son requeridos, por favor verifique e intente nuevamente.",
          "info"
        );
      }
    },
  },
};
</script>